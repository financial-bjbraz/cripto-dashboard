import { createAction, props } from '@ngrx/store';
import { UserWithBalance, GrandTotal, PendingTx, AdminUser, DfnsWallet } from './admin.state';

// ── Admin Balances ─────────────────────────────────────────────────────────────
export const loadAdminBalances = createAction('[Admin] Load Balances');
export const loadAdminBalancesSuccess = createAction(
  '[Admin] Load Balances Success',
  props<{ users: UserWithBalance[]; grandTotal: GrandTotal }>()
);
export const loadAdminBalancesFailure = createAction(
  '[Admin] Load Balances Failure',
  props<{ error: string }>()
);

// ── Pending Transactions ───────────────────────────────────────────────────────
export const loadPendingTransactions = createAction('[Admin] Load Pending Transactions');
export const loadPendingTransactionsSuccess = createAction(
  '[Admin] Load Pending Transactions Success',
  props<{ transactions: PendingTx[] }>()
);
export const loadPendingTransactionsFailure = createAction(
  '[Admin] Load Pending Transactions Failure',
  props<{ error: string }>()
);

export const approveTransaction = createAction(
  '[Admin] Approve Transaction',
  props<{ txId: string }>()
);
export const approveTransactionSuccess = createAction(
  '[Admin] Approve Transaction Success',
  props<{ txId: string }>()
);
export const approveTransactionFailure = createAction(
  '[Admin] Approve Transaction Failure',
  props<{ txId: string; error: string }>()
);

export const rejectTransaction = createAction(
  '[Admin] Reject Transaction',
  props<{ txId: string }>()
);
export const rejectTransactionSuccess = createAction(
  '[Admin] Reject Transaction Success',
  props<{ txId: string }>()
);
export const rejectTransactionFailure = createAction(
  '[Admin] Reject Transaction Failure',
  props<{ txId: string; error: string }>()
);

// ── Admin Users ────────────────────────────────────────────────────────────────
export const loadAdminUsers = createAction('[Admin] Load Users');
export const loadAdminUsersSuccess = createAction(
  '[Admin] Load Users Success',
  props<{ users: AdminUser[] }>()
);
export const loadAdminUsersFailure = createAction(
  '[Admin] Load Users Failure',
  props<{ error: string }>()
);

// ── Stablecoin Transfer ────────────────────────────────────────────────────────
export const createAdminTransfer = createAction(
  '[Admin] Create Transfer',
  props<{ fromUserId: string; toUserId: string; amountFiat: number }>()
);
export const createAdminTransferSuccess = createAction(
  '[Admin] Create Transfer Success',
  props<{ txId: string; amountBrln: number; onChain: boolean }>()
);
export const createAdminTransferFailure = createAction(
  '[Admin] Create Transfer Failure',
  props<{ error: string }>()
);

// ── DFNS: Wallet ───────────────────────────────────────────────────────────────
export const loadDfnsWallet = createAction('[Dfns] Load Wallet');
export const loadDfnsWalletSuccess = createAction(
  '[Dfns] Load Wallet Success',
  props<{ wallet: DfnsWallet }>()
);
export const loadDfnsWalletFailure = createAction(
  '[Dfns] Load Wallet Failure',
  props<{ error: string }>()
);

// ── DFNS: Contract Deploy ──────────────────────────────────────────────────────
export const deployContract = createAction(
  '[Dfns] Deploy Contract',
  props<{ name: string; symbol: string; decimals: number; initialAdmin: string; network: string }>()
);
export const deployContractSuccess = createAction(
  '[Dfns] Deploy Contract Success',
  props<{ txId: string }>()
);
export const deployContractFailure = createAction(
  '[Dfns] Deploy Contract Failure',
  props<{ error: string }>()
);

export const pollDeployStatus = createAction(
  '[Dfns] Poll Deploy Status',
  props<{ txId: string }>()
);
export const pollDeployStatusSuccess = createAction(
  '[Dfns] Poll Deploy Status Success',
  props<{ txId: string; status: string; contractAddress: string | null }>()
);

// ── DFNS: Mint / Burn ──────────────────────────────────────────────────────────
export const mintTokens = createAction(
  '[Dfns] Mint Tokens',
  props<{ toAddress: string; amount: number }>()
);
export const mintTokensSuccess = createAction(
  '[Dfns] Mint Tokens Success',
  props<{ txId: string; status: string }>()
);
export const mintTokensFailure = createAction(
  '[Dfns] Mint Tokens Failure',
  props<{ error: string }>()
);

export const burnTokens = createAction(
  '[Dfns] Burn Tokens',
  props<{ toAddress: string; amount: number }>()
);
export const burnTokensSuccess = createAction(
  '[Dfns] Burn Tokens Success',
  props<{ txId: string; status: string }>()
);
export const burnTokensFailure = createAction(
  '[Dfns] Burn Tokens Failure',
  props<{ error: string }>()
);

// ── DFNS: Pause / Unpause ──────────────────────────────────────────────────────
export const pauseContract = createAction('[Dfns] Pause Contract');
export const pauseContractSuccess = createAction(
  '[Dfns] Pause Contract Success',
  props<{ txId: string }>()
);
export const pauseContractFailure = createAction(
  '[Dfns] Pause Contract Failure',
  props<{ error: string }>()
);

export const unpauseContract = createAction('[Dfns] Unpause Contract');
export const unpauseContractSuccess = createAction(
  '[Dfns] Unpause Contract Success',
  props<{ txId: string }>()
);
export const unpauseContractFailure = createAction(
  '[Dfns] Unpause Contract Failure',
  props<{ error: string }>()
);

// ── DFNS: Transfer ─────────────────────────────────────────────────────────────
export const dfnsTransfer = createAction(
  '[Dfns] Transfer',
  props<{ toAddress: string; amountBrln: number }>()
);
export const dfnsTransferSuccess = createAction(
  '[Dfns] Transfer Success',
  props<{ txId: string; status: string; explorerUrl?: string }>()
);
export const dfnsTransferFailure = createAction(
  '[Dfns] Transfer Failure',
  props<{ error: string }>()
);

export const clearDfnsTxState = createAction('[Dfns] Clear Tx State');
