import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminState } from './admin.state';

export const selectAdminState = createFeatureSelector<AdminState>('admin');

export const selectAdminUsers = createSelector(selectAdminState, s => s.users);
export const selectGrandTotal = createSelector(selectAdminState, s => s.grandTotal);
export const selectPendingTransactions = createSelector(selectAdminState, s => s.pendingTransactions);
export const selectAdminUsersList = createSelector(selectAdminState, s => s.adminUsers);
export const selectAdminLoading = createSelector(selectAdminState, s => s.loading);
export const selectAdminError = createSelector(selectAdminState, s => s.error);

// DFNS selectors
export const selectDfnsWallet = createSelector(selectAdminState, s => s.dfnsWallet);
export const selectDfnsWalletLoading = createSelector(selectAdminState, s => s.dfnsWalletLoading);
export const selectDfnsWalletError = createSelector(selectAdminState, s => s.dfnsWalletError);
export const selectDfnsTxId = createSelector(selectAdminState, s => s.dfnsTxId);
export const selectDfnsTxStatus = createSelector(selectAdminState, s => s.dfnsTxStatus);
export const selectDfnsContractAddress = createSelector(selectAdminState, s => s.dfnsContractAddress);
export const selectDfnsTxLoading = createSelector(selectAdminState, s => s.dfnsTxLoading);
export const selectDfnsTxError = createSelector(selectAdminState, s => s.dfnsTxError);
