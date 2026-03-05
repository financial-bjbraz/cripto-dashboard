import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import { loadAdminBalances } from '../../store/admin/admin.actions';
import {
  selectAdminUsers, selectGrandTotal,
  selectAdminLoading, selectAdminError,
} from '../../store/admin/admin.selectors';

@Component({
  selector: 'app-users-balances',
  templateUrl: './users-balances.component.html',
  styleUrls: ['./users-balances.component.css'],
})
export class UsersBalancesComponent implements OnInit, OnDestroy {
  users$ = this.store.select(selectAdminUsers);
  grandTotal$ = this.store.select(selectGrandTotal);
  loading$ = this.store.select(selectAdminLoading);
  error$ = this.store.select(selectAdminError);

  skeletonRows = [1, 2, 3];
  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.load();
    interval(30_000).pipe(takeUntil(this.destroy$)).subscribe(() => this.load());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  load(): void {
    this.store.dispatch(loadAdminBalances());
  }
}
