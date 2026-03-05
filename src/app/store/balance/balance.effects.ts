import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BalanceService } from '../../balance/balance.service';
import { loadBalance, loadBalanceSuccess, loadBalanceFailure } from './balance.actions';

@Injectable()
export class BalanceEffects {
  loadBalance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBalance),
      switchMap(() =>
        this.balanceService.getBalance().pipe(
          map(b => loadBalanceSuccess({ fiatBalance: b.fiatBalance, brlnBalance: b.brlnBalance })),
          catchError(() => of(loadBalanceFailure({ error: 'Não foi possível carregar o saldo.' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private balanceService: BalanceService) {}
}
