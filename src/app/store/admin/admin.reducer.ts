import { createReducer, on } from '@ngrx/store';
import { AdminState, initialAdminState } from './admin.state';
import * as AdminActions from './admin.actions';

export const adminReducer = createReducer<AdminState>(
  initialAdminState,

  // ── Balances ────────────────────────────────────────────────────────────────
  on(AdminActions.loadAdminBalances, state => ({ ...state, loading: true, error: null })),
  on(AdminActions.loadAdminBalancesSuccess, (state, { users, grandTotal }) => ({
    ...state, users, grandTotal, loading: false,
  })),
  on(AdminActions.loadAdminBalancesFailure, (state, { error }) => ({
    ...state, loading: false, error,
  })),

  // ── Pending Transactions ────────────────────────────────────────────────────
  on(AdminActions.loadPendingTransactions, state => ({ ...state, loading: true, error: null })),
  on(AdminActions.loadPendingTransactionsSuccess, (state, { transactions }) => ({
    ...state, pendingTransactions: transactions, loading: false,
  })),
  on(AdminActions.loadPendingTransactionsFailure, (state, { error }) => ({
    ...state, loading: false, error,
  })),

  on(AdminActions.approveTransactionSuccess, (state, { txId }) => ({
    ...state,
    pendingTransactions: state.pendingTransactions.filter(tx => tx.txId !== txId),
  })),
  on(AdminActions.rejectTransactionSuccess, (state, { txId }) => ({
    ...state,
    pendingTransactions: state.pendingTransactions.filter(tx => tx.txId !== txId),
  })),

  // ── Admin Users ─────────────────────────────────────────────────────────────
  on(AdminActions.loadAdminUsers, state => ({ ...state, loading: true, error: null })),
  on(AdminActions.loadAdminUsersSuccess, (state, { users }) => ({
    ...state, adminUsers: users, loading: false,
  })),
  on(AdminActions.loadAdminUsersFailure, (state, { error }) => ({
    ...state, loading: false, error,
  })),

  // ── Transfer ────────────────────────────────────────────────────────────────
  on(AdminActions.createAdminTransfer, state => ({ ...state, loading: true, error: null })),
  on(AdminActions.createAdminTransferSuccess, state => ({ ...state, loading: false })),
  on(AdminActions.createAdminTransferFailure, (state, { error }) => ({
    ...state, loading: false, error,
  })),

  // ── DFNS Wallet ─────────────────────────────────────────────────────────────
  on(AdminActions.loadDfnsWallet, state => ({ ...state, dfnsWalletLoading: true, dfnsWalletError: null })),
  on(AdminActions.loadDfnsWalletSuccess, (state, { wallet }) => ({
    ...state, dfnsWallet: wallet, dfnsWalletLoading: false,
  })),
  on(AdminActions.loadDfnsWalletFailure, (state, { error }) => ({
    ...state, dfnsWalletLoading: false, dfnsWalletError: error,
  })),

  // ── DFNS Deploy ─────────────────────────────────────────────────────────────
  on(AdminActions.deployContract, state => ({
    ...state, dfnsTxLoading: true, dfnsTxError: null, dfnsTxId: null, dfnsTxStatus: null,
  })),
  on(AdminActions.deployContractSuccess, (state, { txId }) => ({
    ...state, dfnsTxId: txId, dfnsTxStatus: 'Broadcasted',
  })),
  on(AdminActions.deployContractFailure, (state, { error }) => ({
    ...state, dfnsTxLoading: false, dfnsTxError: error,
  })),
  on(AdminActions.pollDeployStatusSuccess, (state, { txId, status, contractAddress }) => ({
    ...state,
    dfnsTxId: txId,
    dfnsTxStatus: status,
    dfnsContractAddress: contractAddress ?? state.dfnsContractAddress,
    dfnsTxLoading: status !== 'Confirmed' && status !== 'Failed',
  })),

  // ── DFNS Mint / Burn / Pause / Transfer ─────────────────────────────────────
  on(AdminActions.mintTokens, AdminActions.burnTokens,
     AdminActions.pauseContract, AdminActions.unpauseContract, AdminActions.dfnsTransfer,
    state => ({ ...state, dfnsTxLoading: true, dfnsTxError: null, dfnsTxId: null, dfnsTxStatus: null })),

  on(AdminActions.mintTokensSuccess, AdminActions.burnTokensSuccess,
     AdminActions.pauseContractSuccess, AdminActions.unpauseContractSuccess,
    (state, action) => ({
      ...state, dfnsTxId: action.txId, dfnsTxStatus: 'status' in action ? (action as any).status : 'Broadcasted', dfnsTxLoading: false,
    })),

  on(AdminActions.dfnsTransferSuccess, (state, { txId, status }) => ({
    ...state, dfnsTxId: txId, dfnsTxStatus: status, dfnsTxLoading: false,
  })),

  on(AdminActions.mintTokensFailure, AdminActions.burnTokensFailure,
     AdminActions.pauseContractFailure, AdminActions.unpauseContractFailure, AdminActions.dfnsTransferFailure,
    (state, { error }) => ({ ...state, dfnsTxLoading: false, dfnsTxError: error })),

  on(AdminActions.clearDfnsTxState, state => ({
    ...state, dfnsTxId: null, dfnsTxStatus: null, dfnsTxError: null, dfnsTxLoading: false,
  }))
);
