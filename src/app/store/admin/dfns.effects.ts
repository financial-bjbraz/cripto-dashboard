import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, interval } from 'rxjs';
import { catchError, map, switchMap, takeWhile } from 'rxjs/operators';
import { DfnsAngularService } from '../../admin/dfns/dfns-angular.service';
import * as AdminActions from './admin.actions';

@Injectable()
export class DfnsEffects {
  loadWallet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadDfnsWallet),
      switchMap(() =>
        this.dfnsService.getWallet().pipe(
          map(wallet => AdminActions.loadDfnsWalletSuccess({ wallet })),
          catchError(err => of(AdminActions.loadDfnsWalletFailure({
            error: err?.error?.message ?? 'Erro ao carregar carteira DFNS.',
          })))
        )
      )
    )
  );

  deployContract$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.deployContract),
      switchMap(action =>
        this.dfnsService.deployContract({
          name: action.name,
          symbol: action.symbol,
          decimals: action.decimals,
          initialAdmin: action.initialAdmin,
          network: action.network,
        }).pipe(
          map(res => AdminActions.deployContractSuccess({ txId: res.txId })),
          catchError(err => of(AdminActions.deployContractFailure({
            error: err?.error?.message ?? 'Erro ao implantar contrato.',
          })))
        )
      )
    )
  );

  // After deploy broadcast, start polling every 5s
  pollDeployAfterBroadcast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.deployContractSuccess),
      map(action => AdminActions.pollDeployStatus({ txId: action.txId }))
    )
  );

  pollDeploy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.pollDeployStatus),
      switchMap(action =>
        interval(5000).pipe(
          switchMap(() => this.dfnsService.getDeployStatus(action.txId)),
          map(res => AdminActions.pollDeployStatusSuccess({
            txId: res.txId,
            status: res.status,
            contractAddress: res.contractAddress,
          })),
          takeWhile(res => res.status !== 'Confirmed' && res.status !== 'Failed', true),
          catchError(() => EMPTY)
        )
      )
    )
  );

  mintTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.mintTokens),
      switchMap(action =>
        this.dfnsService.mintTokens(action.toAddress, action.amount).pipe(
          map(res => AdminActions.mintTokensSuccess({ txId: res.txId, status: res.status })),
          catchError(err => of(AdminActions.mintTokensFailure({
            error: err?.error?.message ?? 'Erro ao mintar tokens.',
          })))
        )
      )
    )
  );

  burnTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.burnTokens),
      switchMap(action =>
        this.dfnsService.burnTokens(action.toAddress, action.amount).pipe(
          map(res => AdminActions.burnTokensSuccess({ txId: res.txId, status: res.status })),
          catchError(err => of(AdminActions.burnTokensFailure({
            error: err?.error?.message ?? 'Erro ao queimar tokens.',
          })))
        )
      )
    )
  );

  pauseContract$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.pauseContract),
      switchMap(() =>
        this.dfnsService.pauseContract().pipe(
          map(res => AdminActions.pauseContractSuccess({ txId: res.txId })),
          catchError(err => of(AdminActions.pauseContractFailure({
            error: err?.error?.message ?? 'Erro ao pausar contrato.',
          })))
        )
      )
    )
  );

  unpauseContract$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.unpauseContract),
      switchMap(() =>
        this.dfnsService.unpauseContract().pipe(
          map(res => AdminActions.unpauseContractSuccess({ txId: res.txId })),
          catchError(err => of(AdminActions.unpauseContractFailure({
            error: err?.error?.message ?? 'Erro ao reativar contrato.',
          })))
        )
      )
    )
  );

  dfnsTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.dfnsTransfer),
      switchMap(action =>
        this.dfnsService.transfer(action.toAddress, action.amountBrln).pipe(
          map(res => AdminActions.dfnsTransferSuccess({
            txId: res.txId,
            status: res.status,
            explorerUrl: res.explorerUrl,
          })),
          catchError(err => of(AdminActions.dfnsTransferFailure({
            error: err?.error?.message ?? 'Erro na transferência DFNS.',
          })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dfnsService: DfnsAngularService) {}
}
