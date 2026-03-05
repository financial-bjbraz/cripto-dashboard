import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState } from '../../store/app.state';
import { loadDfnsWallet } from '../../store/admin/admin.actions';

@Component({
  selector: 'app-dfns',
  templateUrl: './dfns.component.html',
  styleUrls: ['./dfns.component.css'],
})
export class DfnsComponent implements OnInit, OnDestroy {
  activeTab: 'deploy' | 'mintburn' | 'transfer' = 'deploy';
  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadDfnsWallet());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
