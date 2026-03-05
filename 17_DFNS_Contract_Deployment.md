# 17 --- DFNS: ERC-20 Contract Deployment

## Goal

Allow the admin to deploy a new `Stablecoin.sol` ERC-20 contract onto a target
EVM network (e.g., Ethereum Sepolia, Polygon Amoy) using the admin DFNS wallet.
The deployed contract address is saved in BFF config and used for subsequent
mint/burn/transfer operations.

---

## Stablecoin.sol

The contract to deploy is the DFNS reference stablecoin:
- Standard ERC-20 + OpenZeppelin AccessControl
- Roles: `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE`, `BURNER_ROLE`, `PAUSER_ROLE`
- Functions: `mint`, `burn`, `pause`, `unpause`, `transfer`
- Constructor: `(string name, string symbol, uint8 decimals, address initialAdmin)`

Contract bytecode + ABI should be compiled offline (Hardhat/Foundry) and stored
as a JSON file in `bff/src/contracts/StablecoinERC20.json`:
```json
{ "abi": [...], "bytecode": "0x608060..." }
```

---

## BFF

### `POST /dfns/contract/deploy`

Protected by `requireAdmin`.

Request body:
```json
{
  "name":         "Brazilian Real Note",
  "symbol":       "BRLN",
  "decimals":     2,
  "initialAdmin": "0xABC..."
}
```

Processing steps:
1. Load `StablecoinERC20.json` bytecode.
2. ABI-encode constructor args using `ethers.AbiCoder`:
   ```typescript
   const abiCoder = new AbiCoder();
   const constructorArgs = abiCoder.encode(
     ['string', 'string', 'uint8', 'address'],
     [name, symbol, decimals, initialAdmin]
   );
   const deployData = bytecode + constructorArgs.slice(2); // strip 0x
   ```
3. Call `DfnsService.broadcastTransaction(DFNS_ADMIN_WALLET_ID, undefined, deployData)`.
   - `to` is `undefined` / omitted — DFNS treats this as contract deployment.
4. Poll `GET /wallets/{walletId}/transactions/{txId}` until `status === "Confirmed"`.
   - Or return immediately with `{ txId, status: "Broadcasted" }` and let the
     frontend poll `/dfns/contract/deploy/status/:txId`.
5. Once confirmed, extract deployed contract address from transaction receipt.
6. Persist `DFNS_CONTRACT_ADDRESS` in BFF runtime config (env or in-memory for demo).
7. Log audit: `dfns.contract.deployed` with `txId`, `contractAddress`, `network`.

Response:
```json
{
  "txId": "tx-XXXXXXXX",
  "status": "Broadcasted",
  "contractAddress": null
}
```
(Contract address available once status is `"Confirmed"`.)

### `GET /dfns/contract/deploy/status/:txId`

Polls DFNS for transaction status:
```
GET https://api.dfns.ninja/wallets/{walletId}/transactions/{txId}
```

Returns:
```json
{
  "txId": "tx-XXXXXXXX",
  "status": "Confirmed",
  "contractAddress": "0x1234567890abcdef..."
}
```

---

## Frontend

### `DfnsDeployComponent` (sub-section of `DfnsComponent`)

**Form fields:**
- Token Name (e.g., "Brazilian Real Note")
- Token Symbol (e.g., "BRLN")
- Decimals (default: 2)
- Initial Admin Address (defaults to admin DFNS wallet address)
- Network selector: Ethereum Sepolia | Polygon Amoy | Mainnet (dropdown)

**Deploy flow:**
1. Admin fills form → clicks "Deploy Contract".
2. Angular calls `POST /dfns/contract/deploy`.
3. BFF returns `{ txId, status: "Broadcasted" }`.
4. Angular polls `GET /dfns/contract/deploy/status/:txId` every 5 seconds.
5. Spinner shows "Aguardando confirmação..." with txId displayed.
6. On `"Confirmed"` → show success panel with:
   - Contract address (copyable)
   - Explorer link
   - "Contrato implantado com sucesso!"

**Error handling:**
- DFNS API errors → show error message with correlation ID.
- Timeout after 5 minutes of polling → "Deploy demorou muito. Verifique o txId manualmente."

---

## After Deployment

The admin should call `POST /dfns/contract/save` (BFF endpoint) with the confirmed
contract address to persist it for subsequent mint/transfer operations.
For the demo, the address can be set via `DFNS_CONTRACT_ADDRESS` env var.
