# 14 --- Admin: Transaction Approval

## Goal

Transactions above a configurable threshold (default: R$ 10,000) are queued as
`pending` and require explicit admin approval before they execute.

---

## BFF

### Pending Transaction Store

`bff/src/services/pending-tx-store.ts`
- In-memory Map: `txId → PendingTx`
- `PendingTx` shape:
```typescript
interface PendingTx {
  txId: string;
  type: 'buy' | 'sell' | 'transfer';
  userId: string;
  userEmail: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string; // ISO timestamp
  resolvedAt?: string;
  resolvedBy?: string; // admin userId
}
```

### Update `/brln/buy` and `/brln/sell`

When `amount > LARGE_TX_THRESHOLD` (env var, default 10000):
- Do NOT execute immediately.
- Create a `PendingTx` record and return:
```json
{ "status": "pending", "txId": "buy_XXXXX", "message": "Transação aguardando aprovação do admin." }
```
HTTP 202.

### `GET /admin/transactions/pending`

Protected by `requireAdmin`.
Returns all transactions with `status === "pending"`, sorted by `createdAt` desc.

### `POST /admin/transactions/:txId/approve`

Protected by `requireAdmin`.
- Validates `txId` exists and is `pending`.
- Executes the deferred buy/sell logic (debit/credit balanceStore).
- Sets `status = "approved"`, `resolvedAt`, `resolvedBy`.
- Returns updated `PendingTx` and new balances.
- Logs audit event: `admin.tx.approved` with `txId`, `adminId`, `amount`.

### `POST /admin/transactions/:txId/reject`

Protected by `requireAdmin`.
- Sets `status = "rejected"`.
- Logs audit event: `admin.tx.rejected`.
- Returns updated `PendingTx`.

---

## Frontend

### Component: `TransactionApprovalComponent`

`src/app/admin/transaction-approval/transaction-approval.component.ts`

**Template layout:**
```
┌──────────────────────────────────────────────────────────────────┐
│  Transações Pendentes (2)                                         │
├────────┬──────────┬────────┬──────────┬────────────┬────────────┤
│ ID     │ Usuário  │ Tipo   │ Valor    │ Data       │ Ações      │
├────────┼──────────┼────────┼──────────┼────────────┼────────────┤
│ buy_.. │ demo@..  │ Compra │ R$15.000 │ 04/03/2026 │ ✓ Aprovar  │
│        │          │        │          │            │ ✗ Rejeitar │
└────────┴──────────┴────────┴──────────┴────────────┴────────────┘
```

- Green "Aprovar" button → dispatches `approveTransaction({ txId })`.
- Red "Rejeitar" button → dispatches `rejectTransaction({ txId })`.
- Row shows spinner while action is in-flight.
- Confirmation dialog ("Confirmar aprovação de R$ 15.000?") before submit.
- Empty state message when no pending transactions.
- Auto-refreshes every 15 seconds.

### NgRx

Actions:
- `loadPendingTransactions` / `...Success` / `...Failure`
- `approveTransaction({ txId })` / `approveTransactionSuccess` / `...Failure`
- `rejectTransaction({ txId })` / `rejectTransactionSuccess` / `...Failure`

Effects: call `AdminService.getPendingTransactions()`, `approveTx()`, `rejectTx()`.

### Update Buy/Sell components

After calling BFF:
- If response `status === "pending"` (HTTP 202) → show info banner:
  "Sua transação de R$ X está aguardando aprovação do administrador."
- Do NOT dispatch `updateBalance` in this case.
- Dispatch `loadBalance` after confirmation (202 still returns correlation ID).
