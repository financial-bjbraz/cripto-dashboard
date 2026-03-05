# 13 --- Admin: User Balances Dashboard

## Goal

Admin can see every user's fiat and BRLN balance, plus a grand-total summary row.

---

## BFF

### `GET /admin/users/balances`

Protected by `requireAdmin` middleware.

Response:
```json
{
  "users": [
    { "id": "usr_demo_001", "email": "demo@brln.com", "fiatBalance": 4500.00, "brlnBalance": 500.00 },
    { "id": "usr_demo_002", "email": "alice@brln.com", "fiatBalance": 1000.00, "brlnBalance": 2000.00 }
  ],
  "grandTotal": {
    "fiatTotal": 5500.00,
    "brlnTotal": 2500.00
  }
}
```

Implementation notes:
- Read all entries from `balanceStore`.
- Join with a user list (can be a static in-memory list for now, same pattern as DEMO_USERS).
- Compute grand totals by summing all records.

---

## Frontend

### Component: `UsersBalancesComponent`

`src/app/admin/users-balances/users-balances.component.ts`

**Template layout:**
```
┌──────────────────────────────────────────────────────┐
│  Grand Total                                          │
│  Fiat: R$ 5.500,00   |   BRLN: 2.500,00 BRLN        │
├──────────────────────────────────────────────────────┤
│  User              │ Fiat Balance  │ BRLN Balance    │
│────────────────────┼───────────────┼─────────────────│
│  demo@brln.com     │ R$ 4.500,00  │ 500,00 BRLN     │
│  alice@brln.com    │ R$ 1.000,00  │ 2.000,00 BRLN   │
└──────────────────────────────────────────────────────┘
```

- Loading skeleton rows while fetching.
- Error with retry button.
- Auto-refreshes every 30 seconds (`interval(30_000)` + `takeUntil(destroy$)`).

### NgRx

Actions: `loadAdminBalances`, `loadAdminBalancesSuccess`, `loadAdminBalancesFailure`

Effect: `loadAdminBalances$` → calls `AdminService.getUsersBalances()` → dispatches success/failure.

Selectors: `selectAdminUsers`, `selectGrandTotal`, `selectAdminLoading`, `selectAdminError`.

### Service

`src/app/admin/admin.service.ts`

```typescript
getUsersBalances(): Observable<UsersBalancesResponse> {
  return this.http.get<UsersBalancesResponse>(`${environment.bffUrl}/admin/users/balances`, { withCredentials: true });
}
```
