import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BalanceState } from '../app.state';

export const selectBalanceState = createFeatureSelector<BalanceState>('balance');
export const selectFiatBalance = createSelector(selectBalanceState, s => s.fiatBalance);
export const selectBrlnBalance = createSelector(selectBalanceState, s => s.brlnBalance);
export const selectBalanceLoading = createSelector(selectBalanceState, s => s.loading);
export const selectBalanceError = createSelector(selectBalanceState, s => s.error);
