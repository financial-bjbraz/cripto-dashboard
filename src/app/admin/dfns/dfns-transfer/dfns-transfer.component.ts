import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { dfnsTransfer, clearDfnsTxState } from '../../../store/admin/admin.actions';
import { selectDfnsTxId, selectDfnsTxStatus, selectDfnsTxLoading, selectDfnsTxError } from '../../../store/admin/admin.selectors';

@Component({
  selector: 'app-dfns-transfer',
  templateUrl: './dfns-transfer.component.html',
})
export class DfnsTransferComponent {
  form: FormGroup;
  txId$ = this.store.select(selectDfnsTxId);
  txStatus$ = this.store.select(selectDfnsTxStatus);
  loading$ = this.store.select(selectDfnsTxLoading);
  error$ = this.store.select(selectDfnsTxError);

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      toAddress:  ['', Validators.required],
      amountBrln: [null, [Validators.required, Validators.min(0.01)]],
    });
  }

  onTransfer(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { toAddress, amountBrln } = this.form.value;
    this.store.dispatch(dfnsTransfer({ toAddress, amountBrln: Number(amountBrln) }));
  }

  clearResult(): void {
    this.store.dispatch(clearDfnsTxState());
    this.form.reset();
  }
}
