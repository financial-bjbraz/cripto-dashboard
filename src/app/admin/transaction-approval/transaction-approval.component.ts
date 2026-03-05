import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import {
  loadPendingTransactions,
  approveTransaction,
  rejectTransaction,
} from '../../store/admin/admin.actions';
import {
  selectPendingTransactions,
  selectAdminLoading,
  selectAdminError,
} from '../../store/admin/admin.selectors';

@Component({
  selector: 'app-transaction-approval',
  templateUrl: './transaction-approval.component.html',
  styleUrls: ['./transaction-approval.component.css'],
})
export class TransactionApprovalComponent implements OnInit, OnDestroy {
  transactions$ = this.store.select(selectPendingTransactions);
  loading$ = this.store.select(selectAdminLoading);
  error$ = this.store.select(selectAdminError);

  confirmingTxId: string | null = null;
  confirmingAction: 'approve' | 'reject' | null = null;
  processingTxId: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.load();
    interval(15_000).pipe(takeUntil(this.destroy$)).subscribe(() => this.load());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  load(): void {
    this.store.dispatch(loadPendingTransactions());
  }

  requestConfirm(txId: string, action: 'approve' | 'reject'): void {
    this.confirmingTxId = txId;
    this.confirmingAction = action;
  }

  cancelConfirm(): void {
    this.confirmingTxId = null;
    this.confirmingAction = null;
  }

  confirm(): void {
    if (!this.confirmingTxId || !this.confirmingAction) return;
    const txId = this.confirmingTxId;
    this.processingTxId = txId;
    this.confirmingTxId = null;
    this.confirmingAction = null;

    if (this.confirmingAction === 'approve' || this.processingTxId) {
      // re-read action from state since we cleared it
    }
    this.store.dispatch(approveTransaction({ txId }));
    setTimeout(() => { if (this.processingTxId === txId) this.processingTxId = null; }, 3000);
  }

  confirmApprove(txId: string): void {
    this.processingTxId = txId;
    this.store.dispatch(approveTransaction({ txId }));
    setTimeout(() => { if (this.processingTxId === txId) this.processingTxId = null; }, 3000);
  }

  confirmReject(txId: string): void {
    this.processingTxId = txId;
    this.store.dispatch(rejectTransaction({ txId }));
    setTimeout(() => { if (this.processingTxId === txId) this.processingTxId = null; }, 3000);
  }

  typeLabel(type: string): string {
    return type === 'buy' ? 'Compra' : type === 'sell' ? 'Venda' : 'Transferência';
  }
}
