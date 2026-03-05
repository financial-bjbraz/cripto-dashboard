import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import {
  loadAdminUsers,
  loadAdminBalances,
  createAdminTransfer,
} from '../../store/admin/admin.actions';
import {
  selectAdminUsersList,
  selectAdminUsers,
  selectAdminLoading,
  selectAdminError,
} from '../../store/admin/admin.selectors';

@Component({
  selector: 'app-stablecoin-transfer',
  templateUrl: './stablecoin-transfer.component.html',
  styleUrls: ['./stablecoin-transfer.component.css'],
})
export class StablecoinTransferComponent implements OnInit, OnDestroy {
  form: FormGroup;
  adminUsers$ = this.store.select(selectAdminUsersList);
  balances$ = this.store.select(selectAdminUsers);
  loading$ = this.store.select(selectAdminLoading);
  error$ = this.store.select(selectAdminError);

  successResult: { txId: string; amountBrln: number; onChain: boolean } | null = null;
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      fromUserId: ['', Validators.required],
      toUserId:   ['', Validators.required],
      amountFiat: [null, [Validators.required, Validators.min(0.01)]],
    }, { validators: this.differentUsersValidator });
  }

  ngOnInit(): void {
    this.store.dispatch(loadAdminUsers());
    this.store.dispatch(loadAdminBalances());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get amountFiat(): number { return Number(this.form.get('amountFiat')?.value ?? 0); }

  differentUsersValidator(g: AbstractControl): ValidationErrors | null {
    const from = g.get('fromUserId')?.value;
    const to   = g.get('toUserId')?.value;
    return from && to && from === to ? { sameUser: true } : null;
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { fromUserId, toUserId, amountFiat } = this.form.value;
    this.store.dispatch(createAdminTransfer({ fromUserId, toUserId, amountFiat: Number(amountFiat) }));

    // Subscribe once to detect success
    import('../../store/admin/admin.actions').then(({ createAdminTransferSuccess }) => {
      const { ofType } = require('@ngrx/effects');
      // Simple approach: watch loading going from true→false
    });
  }

  reset(): void {
    this.form.reset();
    this.successResult = null;
  }
}
