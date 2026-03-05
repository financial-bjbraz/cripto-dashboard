# 12 --- Admin Route & Guard

## Goal

Add a lazy-loaded `/admin` route accessible only to users with `role === "admin"`.

---

## Backend

### Update `POST /auth/login` response

Add `role` field to JWT payload and login response:

```json
{ "user": { "id": "usr_admin_001", "email": "admin@brln.com", "role": "admin" } }
```

Demo users to add in `bff/src/routes/auth.ts`:
```
admin@brln.com / admin123  → role: "admin"
demo@brln.com  / demo123   → role: "user"
```

JWT payload: `{ sub, email, role }`.

### Protect `/admin/*` and `/dfns/*` routes

Create `bff/src/middleware/requireAdmin.ts`:
- Calls `authenticate` first
- Then checks `req.user.role === "admin"`, else returns 403.

---

## Frontend

### 1. Update `AuthUser` interface

```typescript
// src/app/auth/auth.service.ts
export interface AuthUser {
  id: string;
  email: string;
  role: 'admin' | 'user';
}
```

### 2. Create `AdminGuard`

`src/app/guards/admin.guard.ts`
- If `authService.getUser()?.role !== "admin"` → navigate to `/dashboard` and return false.

### 3. Add `/admin` route

`src/app/app-routing.module.ts`:
```typescript
{
  path: 'admin',
  canActivate: [AuthGuard, AdminGuard],
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
```

### 4. Create `AdminModule`

`src/app/admin/admin.module.ts`:
- Declares all admin components.
- Imports: `SharedModule`, `ReactiveFormsModule`, `StoreModule.forFeature('admin', adminReducer)`, `EffectsModule.forFeature([AdminEffects])`.

### 5. Create `AdminRoutingModule`

```
/admin            → AdminDashboardComponent (overview + quick stats)
/admin/balances   → UsersBalancesComponent
/admin/approvals  → TransactionApprovalComponent
/admin/transfer   → StablecoinTransferComponent
/admin/dfns       → DfnsComponent
```

### 6. Add admin link to sidebar/topbar

Show "Admin" nav link only when `authService.getUser()?.role === "admin"`.

---

## NgRx

Create `src/app/store/admin/`:
- `admin.actions.ts`
- `admin.reducer.ts`
- `admin.selectors.ts`
- `admin.effects.ts`

Initial `AdminState`:
```typescript
interface AdminState {
  users: UserWithBalance[];
  grandTotal: GrandTotal | null;
  pendingTransactions: PendingTx[];
  dfnsWallet: DfnsWallet | null;
  loading: boolean;
  error: string | null;
}
```
