import { createAction, props } from '@ngrx/store';

export const loadBalance = createAction('[Balance] Load Balance');

export const loadBalanceSuccess = createAction(
  '[Balance] Load Balance Success',
  props<{ fiatBalance: number; brlnBalance: number }>()
);

export const loadBalanceFailure = createAction(
  '[Balance] Load Balance Failure',
  props<{ error: string }>()
);

export const updateBalance = createAction(
  '[Balance] Update Balance',
  props<{ fiatBalance: number; brlnBalance: number }>()
);
