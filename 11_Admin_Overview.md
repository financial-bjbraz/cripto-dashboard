# 11 --- Admin Module: Overview & Architecture

## Purpose

A protected admin area inside the existing dashboard for managing the BRLN
stablecoin issuance, user balances, and on-chain operations via DFNS.

---

## Roles

| Role  | Access                                         |
|-------|------------------------------------------------|
| user  | Dashboard, buy/sell BRLN, own balances         |
| admin | Everything above + admin pages, DFNS controls  |

Role is stored in the JWT payload (`role: "admin" | "user"`).
The demo admin credential is `admin@brln.com` / `admin123`.

---

## Architecture

```
Browser (Angular)
  └── AdminModule  (lazy, /admin)
        ├── AdminGuard  (checks role === "admin")
        ├── AdminDashboardComponent  (overview)
        ├── UsersBalancesComponent   (#13)
        ├── TransactionApprovalComponent  (#14)
        ├── StablecoinTransferComponent  (#15)
        └── DfnsComponent  (#18)

BFF (Express)
  ├── /admin/users/balances       ← GET  all balances + grand total
  ├── /admin/transactions/pending ← GET  transactions awaiting approval
  ├── /admin/transactions/:id/approve  ← POST
  ├── /admin/transactions/:id/reject   ← POST
  ├── /admin/transfer             ← POST create transfer between users
  ├── /dfns/wallet                ← GET  admin DFNS wallet
  ├── /dfns/contract/deploy       ← POST deploy ERC-20 (Stablecoin.sol)
  ├── /dfns/contract/mint         ← POST mint tokens
  ├── /dfns/contract/burn         ← POST burn tokens
  ├── /dfns/contract/pause        ← POST pause contract
  └── /dfns/transfers             ← POST on-chain transfer via DFNS
```

---

## NgRx Store (additions)

Slice `admin`:
- `users: UserBalance[]`
- `grandTotal: { fiatTotal, brlnTotal }`
- `pendingTransactions: PendingTx[]`
- `dfnsWallet: DfnsWallet | null`
- `loading: boolean`
- `error: string | null`

---

## Guiding Principles

- All DFNS API calls are made **exclusively from the BFF**.
  The frontend never holds DFNS credentials.
- DFNS Service Account credentials are stored in BFF environment variables.
- Admin role is verified on every BFF `/admin/*` and `/dfns/*` route.
- Large transfers (> configurable threshold, default R$ 10,000) are queued
  as `pending` and require explicit admin approval before execution.
