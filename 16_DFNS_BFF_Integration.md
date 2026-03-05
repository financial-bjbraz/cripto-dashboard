# 16 --- DFNS BFF Integration

## Goal

The BFF acts as the sole bridge between the Angular app and DFNS.
No DFNS credentials or API calls ever reach the browser.

---

## DFNS Authentication

DFNS uses **Service Account tokens** for backend-to-backend calls:

| Header                | Value                                |
|-----------------------|--------------------------------------|
| `Authorization`       | `Bearer <DFNS_SERVICE_ACCOUNT_TOKEN>`|
| `X-DFNS-APPID`        | `<DFNS_APP_ID>`                      |
| `Content-Type`        | `application/json`                   |

State-changing requests (POST/PATCH) also require the `X-DFNS-USERACTION` header
(challenge-response signature). For a Service Account, this is a JWT signed with
the service account's private key.

### BFF Environment Variables

```env
DFNS_API_URL=https://api.dfns.ninja           # sandbox
DFNS_APP_ID=ap-XXXXXXXXXXXX
DFNS_SERVICE_ACCOUNT_TOKEN=eyJ...             # long-lived service account token
DFNS_SERVICE_ACCOUNT_PRIVATE_KEY=-----BEGIN...# for signing user-action challenges
DFNS_ADMIN_WALLET_ID=wa-XXXXXXXXXXXX          # pre-created DFNS wallet for admin
DFNS_CONTRACT_ADDRESS=0x...                   # deployed ERC-20 contract (after deploy)
LARGE_TX_THRESHOLD=10000                      # BRL threshold for pending approval
```

---

## BFF Service: `DfnsService`

`bff/src/services/dfns.service.ts`

### Responsibilities

1. **HTTP client wrapper** – builds authenticated DFNS requests (adds `Authorization`, `X-DFNS-APPID`).
2. **Challenge-response signer** – for POST requests, calls `POST /auth/action/init`, receives challenge, signs it with `DFNS_SERVICE_ACCOUNT_PRIVATE_KEY` (ES256 / ECDSA P-256), sends signature in `X-DFNS-USERACTION`.
3. **Retry / error normalisation** – maps DFNS HTTP errors to BFF `AppError`.

### Key Methods

```typescript
class DfnsService {
  // Wallet
  getAdminWallet(): Promise<DfnsWallet>
  getWalletAssets(walletId: string): Promise<DfnsAsset[]>

  // ERC-20 transfers (uses POST /wallets/{id}/transfers)
  transferERC20(
    fromWalletId: string,
    toAddress: string,
    contractAddress: string,
    amount: string          // in token base units (wei-equivalent)
  ): Promise<DfnsTransfer>

  // Sign & Broadcast (generic contract call)
  broadcastTransaction(
    walletId: string,
    to: string,
    data: string            // ABI-encoded hex
    value?: string
  ): Promise<DfnsBroadcast>
}
```

---

## BFF Routes

### `GET /dfns/wallet`
Protected by `requireAdmin`.
Calls `DfnsService.getAdminWallet()` → returns wallet id, network, address, balances.

### `POST /dfns/transfers`
Protected by `requireAdmin`.

Request:
```json
{ "toAddress": "0xDEF...", "amountBrln": 500.00 }
```

Processing:
1. Convert `amountBrln` to token units: `amount = BigInt(Math.round(amountBrln * 10 ** TOKEN_DECIMALS)).toString()`.
2. Call `DfnsService.transferERC20(DFNS_ADMIN_WALLET_ID, toAddress, DFNS_CONTRACT_ADDRESS, amount)`.
3. Log audit: `dfns.transfer` with `txId`, `toAddress`, `amount`.
4. Return `{ txId, status, explorerUrl? }`.

### `POST /dfns/contract/deploy`
Protected by `requireAdmin`.
See file 17.

### `POST /dfns/contract/mint`
Protected by `requireAdmin`.

Request: `{ "toAddress": "0x...", "amount": 1000 }` (BRLN amount, float)

Processing:
1. ABI-encode `mint(address, uint256)` call.
2. Call `DfnsService.broadcastTransaction(DFNS_ADMIN_WALLET_ID, DFNS_CONTRACT_ADDRESS, encodedData)`.
3. Log audit: `dfns.mint`.
4. Return `{ txId, status }`.

### `POST /dfns/contract/burn`
Same as mint but calls `burn(address, uint256)`.

### `POST /dfns/contract/pause` / `/unpause`
ABI-encodes `pause()` / `unpause()`, broadcasts, returns `{ txId, status }`.

---

## ABI Encoding in BFF

Install `ethers` in BFF (already used in Angular side; add to BFF):
```
npm install ethers --save   (in bff/)
```

Use `ethers.Interface` to ABI-encode calls:
```typescript
import { Interface } from 'ethers';
const iface = new Interface(ERC20_ABI);
const data = iface.encodeFunctionData('mint', [toAddress, amountUnits]);
```

---

## Error Handling

| DFNS Error | BFF response |
|------------|-------------|
| 401        | 401 — DFNS credentials invalid or expired |
| 403        | 403 — Service account lacks permission |
| 422        | 422 — Insufficient wallet balance |
| 5xx        | 502 — DFNS upstream error |
