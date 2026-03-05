import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { loadDfnsWallet } from '../../../store/admin/admin.actions';
import { selectDfnsWallet, selectDfnsWalletLoading, selectDfnsWalletError } from '../../../store/admin/admin.selectors';

@Component({
  selector: 'app-dfns-wallet-info',
  templateUrl: './dfns-wallet-info.component.html',
})
export class DfnsWalletInfoComponent implements OnInit {
  wallet$ = this.store.select(selectDfnsWallet);
  loading$ = this.store.select(selectDfnsWalletLoading);
  error$ = this.store.select(selectDfnsWalletError);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadDfnsWallet());
  }

  refresh(): void {
    this.store.dispatch(loadDfnsWallet());
  }

  truncate(s: string, n = 10): string {
    return s.length > n * 2 + 3 ? s.slice(0, n) + '…' + s.slice(-n) : s;
  }

  copy(text: string): void {
    navigator.clipboard.writeText(text).catch(() => {});
  }
}
