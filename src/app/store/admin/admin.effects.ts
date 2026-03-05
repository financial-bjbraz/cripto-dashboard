import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AdminService } from '../../admin/admin.service';
import * as AdminActions from './admin.actions';

@Injectable()
export class AdminEffects {
  loadAdminBalances$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadAdminBalances),
      switchMap(() =>
        this.adminService.getUsersBalances().pipe(
          map(res => AdminActions.loadAdminBalancesSuccess({ users: res.users, grandTotal: res.grandTotal })),
          catchError(err => of(AdminActions.loadAdminBalancesFailure({
            error: err?.error?.message ?? 'Erro ao carregar saldos.',
          })))
        )
      )
    )
  );

  loadPendingTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadPendingTransactions),
      switchMap(() =>
        this.adminService.getPendingTransactions().pipe(
          map(res => AdminActions.loadPendingTransactionsSuccess({ transactions: res.transactions })),
          catchError(err => of(AdminActions.loadPendingTransactionsFailure({
            error: err?.error?.message ?? 'Erro ao carregar transações pendentes.',
          })))
        )
      )
    )
  );

  approveTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.approveTransaction),
      switchMap(action =>
        this.adminService.approveTx(action.txId).pipe(
          map(() => AdminActions.approveTransactionSuccess({ txId: action.txId })),
          catchError(err => of(AdminActions.approveTransactionFailure({
            txId: action.txId,
            error: err?.error?.message ?? 'Erro ao aprovar transação.',
          })))
        )
      )
    )
  );

  rejectTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.rejectTransaction),
      switchMap(action =>
        this.adminService.rejectTx(action.txId).pipe(
          map(() => AdminActions.rejectTransactionSuccess({ txId: action.txId })),
          catchError(err => of(AdminActions.rejectTransactionFailure({
            txId: action.txId,
            error: err?.error?.message ?? 'Erro ao rejeitar transação.',
          })))
        )
      )
    )
  );

  loadAdminUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadAdminUsers),
      switchMap(() =>
        this.adminService.getUsers().pipe(
          map(res => AdminActions.loadAdminUsersSuccess({ users: res.users })),
          catchError(err => of(AdminActions.loadAdminUsersFailure({
            error: err?.error?.message ?? 'Erro ao carregar usuários.',
          })))
        )
      )
    )
  );

  createAdminTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.createAdminTransfer),
      switchMap(action =>
        this.adminService.createTransfer({
          fromUserId: action.fromUserId,
          toUserId: action.toUserId,
          amountFiat: action.amountFiat,
        }).pipe(
          map(res => AdminActions.createAdminTransferSuccess({
            txId: res.txId,
            amountBrln: res.amountBrln,
            onChain: res.onChain,
          })),
          catchError(err => of(AdminActions.createAdminTransferFailure({
            error: err?.error?.message ?? 'Erro ao criar transferência.',
          })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private adminService: AdminService) {}
}
