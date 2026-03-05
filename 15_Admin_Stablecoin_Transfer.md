# 15 --- Admin: Stablecoin Transfer Between Users

## Goal

Admin can create a direct BRLN transfer from one user to another.
The admin inputs a value in **FIAT (BRL)**, the app converts it to the
equivalent BRLN amount (1:1 peg), resolves the destination address via BFF,
and submits the transfer.

---

## BFF

### `GET /admin/users`

Protected by `requireAdmin`.
Returns the list of all users (id, email, dfnsWalletAddress if any):
```json
{
  "users": [
    { "id": "usr_demo_001", "email": "demo@brln.com",  "walletAddress": "0xABC..." },
    { "id": "usr_demo_002", "email": "alice@brln.com", "walletAddress": null }
  ]
}
```

Address resolution logic (BFF-side):
- Store wallet addresses in a `walletStore` (Map: userId → address).
- If a user has a DFNS wallet, the address comes from DFNS `/wallets/{id}` response.
- If not yet linked, returns `null` (transfer only possible for users with an address).

### `POST /admin/transfer`

Protected by `requireAdmin`.

Request body:
```json
{
  "fromUserId": "usr_admin_001",
  "toUserId":   "usr_demo_001",
  "amountFiat": 500.00
}
```

Processing steps:
1. Validate `amountFiat > 0`.
2. Resolve BRLN amount: `brlnAmount = amountFiat` (1:1 peg).
3. Check `fromUser.brlnBalance >= brlnAmount`.
4. Debit `fromUser.brlnBalance`, credit `toUser.brlnBalance` in `balanceStore`.
5. If destination user has a `walletAddress`, call DFNS `POST /wallets/{adminWalletId}/transfers`
   (ERC-20 transfer to destination address) — see file 16.
6. Log audit event: `admin.transfer` with `fromUserId`, `toUserId`, `txId`, `amountBrln`.
7. Return:
```json
{
  "txId": "transfer_XXXXX",
  "amountBrln": 500.00,
  "fromBalance": { "brlnBalance": 9500.00 },
  "toBalance":   { "brlnBalance": 5500.00 },
  "onChain": true | false
}
```

---

## Frontend

### Component: `StablecoinTransferComponent`

`src/app/admin/stablecoin-transfer/stablecoin-transfer.component.ts`

**Form fields:**
- **De (From):** dropdown listing all users (id + email) — pre-selected to logged-in admin.
- **Para (To):** dropdown listing all users; shows wallet address badge if available.
- **Valor em BRL (R$):** numeric input, min 0.01.
- **Equivalente em BRLN:** read-only display, updated live as user types: `= amountFiat × 1` (shown as `X,XX BRLN`).
- **Submit button:** "Transferir BRLN"

**Validation:**
- From ≠ To.
- `amountFiat > 0`.
- From user must have sufficient `brlnBalance` (fetched from admin balances).
- `[Validators.required, Validators.min(0.01)]`

**Success state:**
- Show summary: amount transferred, txId, on-chain status.
- "Nova transferência" reset button.

**FIAT → BRLN conversion display:**
```
Valor em BRL:    R$ 500,00
                 ↓  1:1
Valor em BRLN:   500,00 BRLN
```

### Service method

```typescript
// src/app/admin/admin.service.ts
getUsers(): Observable<AdminUsersResponse> { ... }

createTransfer(payload: TransferRequest): Observable<TransferResponse> {
  return this.http.post<TransferResponse>(
    `${environment.bffUrl}/admin/transfer`, payload, { withCredentials: true }
  );
}
```

### NgRx

Actions: `loadAdminUsers`, `loadAdminUsersSuccess`, `loadAdminUsersFailure`,
`createAdminTransfer`, `createAdminTransferSuccess`, `createAdminTransferFailure`.
