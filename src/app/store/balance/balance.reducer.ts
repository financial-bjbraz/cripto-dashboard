import { Action, createReducer, on } from '@ngrx/store';
import { BalanceState } from '../app.state';
import { loadBalance, loadBalanceSuccess, loadBalanceFailure, updateBalance } from './balance.actions';

export const initialBalanceState: BalanceState = {
  fiatBalance: 0,
  brlnBalance: 0,
  loading: false,
  error: null,
};

const _balanceReducer = createReducer(
  initialBalanceState,
  on(loadBalance, state => ({ ...state, loading: true, error: null })),
  on(loadBalanceSuccess, (state, { fiatBalance, brlnBalance }) => ({
    ...state,
    fiatBalance,
    brlnBalance,
    loading: false,
    error: null,
  })),
  on(loadBalanceFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(updateBalance, (state, { fiatBalance, brlnBalance }) => ({
    ...state,
    fiatBalance,
    brlnBalance,
  })),
);

export function balanceReducer(state: BalanceState | undefined, action: Action): BalanceState {
  return _balanceReducer(state, action);
}
