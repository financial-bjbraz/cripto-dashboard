# 18 --- DFNS Angular Component

## Goal

A single `DfnsComponent` under `/admin/dfns` that lets the admin interact with
the DFNS wallet and on-chain contract without ever touching credentials directly.
The component is divided into four sub-sections, each backed by a dedicated
BFF route (see files 16 and 17).

---

## Route

```
/admin/dfns
```

Accessible only to `role === "admin"` (protected by `AuthGuard` + `AdminGuard`).

---

## File Structure

```
src/app/admin/dfns/
  dfns.component.ts
  dfns.component.html
  dfns.component.css
  dfns-deploy/
    dfns-deploy.component.ts
    dfns-deploy.component.html
    dfns-deploy.component.css
  dfns-mint-burn/
    dfns-mint-burn.component.ts
    dfns-mint-burn.component.html
  dfns-transfer/
    dfns-transfer.component.ts
    dfns-transfer.component.html
  dfns-wallet-info/
    dfns-wallet-info.component.ts
    dfns-wallet-info.component.html
```

---

## NgRx: Admin Store Additions

All DFNS state lives in the existing `admin` feature slice:

```typescript
// admin.state.ts additions
export interface DfnsWallet {
  id: string;
  network: string;
  address: string;
  status: string;
  assets?: DfnsAsset[];
}

export interface DfnsAsset {
  symbol: string;
  balance: string;
  decimals: number;
}

export interface AdminState {
  // ... existing fields ...
  dfnsWallet: DfnsWallet | null;
  dfnsWalletLoading: boolean;
  dfnsWalletError: string | null;
  dfnsTxId: string | null;
  dfnsTxStatus: string | null;           // 'Broadcasted' | 'Confirmed' | 'Failed'
  dfnsContractAddress: string | null;
  dfnsTxLoading: boolean;
  dfnsTxError: string | null;
}
```

### Actions

```typescript
// dfns.actions.ts
export const loadDfnsWallet = createAction('[Dfns] Load Wallet');
export const loadDfnsWalletSuccess = createAction('[Dfns] Load Wallet Success', props<{ wallet: DfnsWallet }>());
export const loadDfnsWalletFailure = createAction('[Dfns] Load Wallet Failure', props<{ error: string }>());

export const deployContract = createAction('[Dfns] Deploy Contract', props<{ name: string; symbol: string; decimals: number; initialAdmin: string; network: string }>());
export const deployContractSuccess = createAction('[Dfns] Deploy Contract Success', props<{ txId: string }>());
export const deployContractFailure = createAction('[Dfns] Deploy Contract Failure', props<{ error: string }>());

export const pollDeployStatus = createAction('[Dfns] Poll Deploy Status', props<{ txId: string }>());
export const pollDeployStatusSuccess = createAction('[Dfns] Poll Deploy Status Success', props<{ txId: string; status: string; contractAddress: string | null }>());

export const mintTokens = createAction('[Dfns] Mint Tokens', props<{ toAddress: string; amount: number }>());
export const mintTokensSuccess = createAction('[Dfns] Mint Tokens Success', props<{ txId: string; status: string }>());
export const mintTokensFailure = createAction('[Dfns] Mint Tokens Failure', props<{ error: string }>());

export const burnTokens = createAction('[Dfns] Burn Tokens', props<{ toAddress: string; amount: number }>());
export const burnTokensSuccess = createAction('[Dfns] Burn Tokens Success', props<{ txId: string; status: string }>());
export const burnTokensFailure = createAction('[Dfns] Burn Tokens Failure', props<{ error: string }>());

export const pauseContract = createAction('[Dfns] Pause Contract');
export const pauseContractSuccess = createAction('[Dfns] Pause Contract Success', props<{ txId: string }>());
export const pauseContractFailure = createAction('[Dfns] Pause Contract Failure', props<{ error: string }>());

export const unpauseContract = createAction('[Dfns] Unpause Contract');
export const unpauseContractSuccess = createAction('[Dfns] Unpause Contract Success', props<{ txId: string }>());
export const unpauseContractFailure = createAction('[Dfns] Unpause Contract Failure', props<{ error: string }>());

export const dfnsTransfer = createAction('[Dfns] Transfer', props<{ toAddress: string; amountBrln: number }>());
export const dfnsTransferSuccess = createAction('[Dfns] Transfer Success', props<{ txId: string; status: string; explorerUrl?: string }>());
export const dfnsTransferFailure = createAction('[Dfns] Transfer Failure', props<{ error: string }>());

export const clearDfnsTxState = createAction('[Dfns] Clear Tx State');
```

### Effects

```typescript
// dfns.effects.ts
@Injectable()
export class DfnsEffects {
  loadWallet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDfnsWallet),
      switchMap(() =>
        this.dfnsService.getWallet().pipe(
          map(wallet => loadDfnsWalletSuccess({ wallet })),
          catchError(err => of(loadDfnsWalletFailure({ error: err.message })))
        )
      )
    )
  );

  deployContract$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deployContract),
      switchMap(action =>
        this.dfnsService.deployContract(action).pipe(
          map(res => deployContractSuccess({ txId: res.txId })),
          catchError(err => of(deployContractFailure({ error: err.error?.message ?? 'Erro ao implantar contrato.' })))
        )
      )
    )
  );

  // After deploy success, start polling every 5s
  pollDeployAfterBroadcast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deployContractSuccess),
      map(action => pollDeployStatus({ txId: action.txId }))
    )
  );

  pollDeploy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pollDeployStatus),
      switchMap(action =>
        interval(5000).pipe(
          switchMap(() => this.dfnsService.getDeployStatus(action.txId)),
          map(res => pollDeployStatusSuccess({ txId: res.txId, status: res.status, contractAddress: res.contractAddress })),
          takeWhile(res => res.status !== 'Confirmed' && res.status !== 'Failed', true),
          catchError(() => EMPTY)
        )
      )
    )
  );

  mintTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mintTokens),
      switchMap(action =>
        this.dfnsService.mintTokens(action.toAddress, action.amount).pipe(
          map(res => mintTokensSuccess({ txId: res.txId, status: res.status })),
          catchError(err => of(mintTokensFailure({ error: err.error?.message ?? 'Erro ao mintar tokens.' })))
        )
      )
    )
  );

  burnTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(burnTokens),
      switchMap(action =>
        this.dfnsService.burnTokens(action.toAddress, action.amount).pipe(
          map(res => burnTokensSuccess({ txId: res.txId, status: res.status })),
          catchError(err => of(burnTokensFailure({ error: err.error?.message ?? 'Erro ao queimar tokens.' })))
        )
      )
    )
  );

  pauseContract$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pauseContract),
      switchMap(() =>
        this.dfnsService.pauseContract().pipe(
          map(res => pauseContractSuccess({ txId: res.txId })),
          catchError(err => of(pauseContractFailure({ error: err.error?.message ?? 'Erro ao pausar contrato.' })))
        )
      )
    )
  );

  unpauseContract$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unpauseContract),
      switchMap(() =>
        this.dfnsService.unpauseContract().pipe(
          map(res => unpauseContractSuccess({ txId: res.txId })),
          catchError(err => of(unpauseContractFailure({ error: err.error?.message ?? 'Erro ao retomar contrato.' })))
        )
      )
    )
  );

  dfnsTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dfnsTransfer),
      switchMap(action =>
        this.dfnsService.transfer(action.toAddress, action.amountBrln).pipe(
          map(res => dfnsTransferSuccess({ txId: res.txId, status: res.status, explorerUrl: res.explorerUrl })),
          catchError(err => of(dfnsTransferFailure({ error: err.error?.message ?? 'Erro na transferência DFNS.' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dfnsService: DfnsAngularService) {}
}
```

### Selectors

```typescript
// dfns.selectors.ts (added to admin selectors file)
export const selectDfnsWallet = createSelector(selectAdminState, s => s.dfnsWallet);
export const selectDfnsWalletLoading = createSelector(selectAdminState, s => s.dfnsWalletLoading);
export const selectDfnsWalletError = createSelector(selectAdminState, s => s.dfnsWalletError);
export const selectDfnsTxId = createSelector(selectAdminState, s => s.dfnsTxId);
export const selectDfnsTxStatus = createSelector(selectAdminState, s => s.dfnsTxStatus);
export const selectDfnsContractAddress = createSelector(selectAdminState, s => s.dfnsContractAddress);
export const selectDfnsTxLoading = createSelector(selectAdminState, s => s.dfnsTxLoading);
export const selectDfnsTxError = createSelector(selectAdminState, s => s.dfnsTxError);
```

---

## Service: `DfnsAngularService`

`src/app/admin/dfns/dfns-angular.service.ts`

All calls go to BFF. No DFNS credentials in the frontend.

```typescript
@Injectable({ providedIn: 'root' })
export class DfnsAngularService {
  private base = `${environment.bffUrl}/dfns`;

  constructor(private http: HttpClient) {}

  getWallet(): Observable<DfnsWallet> {
    return this.http.get<DfnsWallet>(`${this.base}/wallet`, { withCredentials: true });
  }

  deployContract(params: { name: string; symbol: string; decimals: number; initialAdmin: string }): Observable<{ txId: string; status: string; contractAddress: string | null }> {
    return this.http.post<any>(`${this.base}/contract/deploy`, params, { withCredentials: true });
  }

  getDeployStatus(txId: string): Observable<{ txId: string; status: string; contractAddress: string | null }> {
    return this.http.get<any>(`${this.base}/contract/deploy/status/${txId}`, { withCredentials: true });
  }

  mintTokens(toAddress: string, amount: number): Observable<{ txId: string; status: string }> {
    return this.http.post<any>(`${this.base}/contract/mint`, { toAddress, amount }, { withCredentials: true });
  }

  burnTokens(toAddress: string, amount: number): Observable<{ txId: string; status: string }> {
    return this.http.post<any>(`${this.base}/contract/burn`, { toAddress, amount }, { withCredentials: true });
  }

  pauseContract(): Observable<{ txId: string; status: string }> {
    return this.http.post<any>(`${this.base}/contract/pause`, {}, { withCredentials: true });
  }

  unpauseContract(): Observable<{ txId: string; status: string }> {
    return this.http.post<any>(`${this.base}/contract/unpause`, {}, { withCredentials: true });
  }

  transfer(toAddress: string, amountBrln: number): Observable<{ txId: string; status: string; explorerUrl?: string }> {
    return this.http.post<any>(`${this.base}/transfers`, { toAddress, amountBrln }, { withCredentials: true });
  }
}
```

---

## Parent Component: `DfnsComponent`

`src/app/admin/dfns/dfns.component.ts`

Displays the four sub-sections as Angular Material tabs (or simple CSS tabs if
Material is not in the project).

```typescript
@Component({
  selector: 'app-dfns',
  templateUrl: './dfns.component.html',
  styleUrls: ['./dfns.component.css']
})
export class DfnsComponent implements OnInit, OnDestroy {
  wallet$ = this.store.select(selectDfnsWallet);
  walletLoading$ = this.store.select(selectDfnsWalletLoading);
  walletError$ = this.store.select(selectDfnsWalletError);

  activeTab: 'wallet' | 'deploy' | 'mintburn' | 'transfer' = 'wallet';

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadDfnsWallet());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

### Template Layout

```html
<!-- dfns.component.html -->
<div class="dfns-container">
  <h2>DFNS — Carteira & Contrato</h2>

  <!-- Wallet info banner -->
  <app-dfns-wallet-info></app-dfns-wallet-info>

  <!-- Tab navigation -->
  <div class="dfns-tabs">
    <button [class.active]="activeTab === 'deploy'"   (click)="activeTab = 'deploy'">Implantar Contrato</button>
    <button [class.active]="activeTab === 'mintburn'" (click)="activeTab = 'mintburn'">Mint / Burn</button>
    <button [class.active]="activeTab === 'transfer'" (click)="activeTab = 'transfer'">Transferência On-Chain</button>
  </div>

  <div class="dfns-tab-content">
    <app-dfns-deploy    *ngIf="activeTab === 'deploy'"></app-dfns-deploy>
    <app-dfns-mint-burn *ngIf="activeTab === 'mintburn'"></app-dfns-mint-burn>
    <app-dfns-transfer  *ngIf="activeTab === 'transfer'"></app-dfns-transfer>
  </div>
</div>
```

---

## Sub-component 1: `DfnsWalletInfoComponent`

Always visible at the top of `DfnsComponent`.

**Displays:**
- Wallet ID (truncated)
- Network (e.g., `EthereumSepolia`)
- Address (truncated + copy button)
- Status badge (`Active` / `Inactive`)
- Asset balances (ETH and BRLN if available)
- "Atualizar" button → dispatches `loadDfnsWallet()`

```
┌──────────────────────────────────────────────────────┐
│  Carteira DFNS                           [Atualizar] │
│  ID:      wa-XXXXXX…                                 │
│  Rede:    EthereumSepolia                            │
│  Endereço: 0xABC…DEF  [📋]                           │
│  Status:  ● Ativa                                    │
│  Saldo ETH:  0.05 ETH                                │
│  Saldo BRLN: 10.000,00 BRLN                          │
└──────────────────────────────────────────────────────┘
```

---

## Sub-component 2: `DfnsDeployComponent`

For deploying `Stablecoin.sol` — details in file 17.

**Form:**
```
Token Name:      [Brazilian Real Note          ]
Token Symbol:    [BRLN                         ]
Decimals:        [2                            ]
Initial Admin:   [0xABC... (pre-filled)        ]
Network:         [Ethereum Sepolia ▼           ]

                 [  Deploy Contract  ]
```

**States:**
1. Idle — form enabled.
2. Loading — spinner, form disabled, "Aguardando confirmação…" + txId shown.
3. Confirmed — success panel:
   ```
   ✓ Contrato implantado com sucesso!
   Endereço: 0x1234…ABCD  [📋]
   [Ver no Explorer]
   ```
4. Error — error banner with message + "Tentar novamente".
5. Timeout (5 min polling) — warning with txId and manual check instructions.

---

## Sub-component 3: `DfnsMintBurnComponent`

**Mint tab:**
```
Endereço destino: [0x...                        ]
Quantidade BRLN:  [1000                         ]
                  [  Mintar  ]
```

**Burn tab:**
```
Endereço fonte:   [0x...                        ]
Quantidade BRLN:  [500                          ]
                  [  Queimar  ]
```

**Pause / Unpause row** (below tabs):
```
Status do contrato:  ● Ativo
                     [  Pausar Contrato  ]  [  Reativar Contrato  ]
```

- Both Mint and Burn show spinner + txId on success.
- Pause/Unpause buttons show confirmation dialog before dispatching.

**NgRx dispatches:**
- Mint submit → `mintTokens({ toAddress, amount })`
- Burn submit → `burnTokens({ toAddress, amount })`
- Pause click → `pauseContract()`
- Unpause click → `unpauseContract()`

---

## Sub-component 4: `DfnsTransferComponent`

Direct on-chain ERC-20 transfer from the admin DFNS wallet.

```
Endereço destino: [0x...                        ]
Quantidade BRLN:  [500.00                       ]
                  [  Transferir On-Chain  ]
```

On success:
```
✓ Transferência enviada!
txId:    tx-XXXXXXXX
Status:  Broadcasted
[Ver no Explorer]
```

Dispatches `dfnsTransfer({ toAddress, amountBrln })`.

---

## Registration in AdminModule

```typescript
// admin.module.ts (additions)
import { DfnsComponent }           from './dfns/dfns.component';
import { DfnsWalletInfoComponent } from './dfns/dfns-wallet-info/dfns-wallet-info.component';
import { DfnsDeployComponent }     from './dfns/dfns-deploy/dfns-deploy.component';
import { DfnsMintBurnComponent }   from './dfns/dfns-mint-burn/dfns-mint-burn.component';
import { DfnsTransferComponent }   from './dfns/dfns-transfer/dfns-transfer.component';
import { DfnsEffects }             from './store/dfns.effects';

// In declarations: [..., DfnsComponent, DfnsWalletInfoComponent, DfnsDeployComponent, DfnsMintBurnComponent, DfnsTransferComponent]
// In imports: [..., EffectsModule.forFeature([..., DfnsEffects])]

// In routes:
{ path: 'dfns', component: DfnsComponent }
```

---

## CSS Notes

- All DFNS components use scoped CSS (`:host` + `dfns-*` class prefix).
- Color palette consistent with existing app:
  - Success green: `#10B981`
  - Error red: `#EF4444`
  - Pending yellow: `#F59E0B`
  - Card background: same as `.balance-card` in the existing design.
- Tabs use `border-bottom: 2px solid #10B981` for active state.
- Address display: monospace font, `letter-spacing: 0.05em`, max-width with `text-overflow: ellipsis`.
