import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../store/app.state';
import { loadBalance } from '../store/balance/balance.actions';
import {
  selectFiatBalance,
  selectBrlnBalance,
  selectBalanceLoading,
  selectBalanceError,
} from '../store/balance/balance.selectors';
import { UserBalance } from './balance.service';

@Component({
  selector: 'balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit, OnDestroy {
  loading = true;
  error = '';
  balance: UserBalance | null = null;

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    combineLatest([
      this.store.select(selectFiatBalance),
      this.store.select(selectBrlnBalance),
      this.store.select(selectBalanceLoading),
      this.store.select(selectBalanceError),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([fiat, brln, loading, error]) => {
        this.loading = loading;
        this.error = error ?? '';
        if (!loading && !error) {
          this.balance = { fiatBalance: fiat, brlnBalance: brln };
        }
      });

    this.store.dispatch(loadBalance());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  load(): void {
    this.store.dispatch(loadBalance());
  }

  formatBRL(value: number): string {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
