import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { mintTokens, burnTokens, pauseContract, unpauseContract, clearDfnsTxState } from '../../../store/admin/admin.actions';
import { selectDfnsTxId, selectDfnsTxStatus, selectDfnsTxLoading, selectDfnsTxError } from '../../../store/admin/admin.selectors';

@Component({
  selector: 'app-dfns-mint-burn',
  templateUrl: './dfns-mint-burn.component.html',
})
export class DfnsMintBurnComponent {
  activeTab: 'mint' | 'burn' = 'mint';
  mintForm: FormGroup;
  burnForm: FormGroup;

  txId$ = this.store.select(selectDfnsTxId);
  txStatus$ = this.store.select(selectDfnsTxStatus);
  loading$ = this.store.select(selectDfnsTxLoading);
  error$ = this.store.select(selectDfnsTxError);

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.mintForm = this.fb.group({
      toAddress: ['', Validators.required],
      amount:    [null, [Validators.required, Validators.min(0.01)]],
    });
    this.burnForm = this.fb.group({
      toAddress: ['', Validators.required],
      amount:    [null, [Validators.required, Validators.min(0.01)]],
    });
  }

  onMint(): void {
    if (this.mintForm.invalid) { this.mintForm.markAllAsTouched(); return; }
    const { toAddress, amount } = this.mintForm.value;
    this.store.dispatch(mintTokens({ toAddress, amount: Number(amount) }));
  }

  onBurn(): void {
    if (this.burnForm.invalid) { this.burnForm.markAllAsTouched(); return; }
    const { toAddress, amount } = this.burnForm.value;
    this.store.dispatch(burnTokens({ toAddress, amount: Number(amount) }));
  }

  onPause(): void {
    if (confirm('Confirmar pausa do contrato?')) this.store.dispatch(pauseContract());
  }

  onUnpause(): void {
    if (confirm('Confirmar reativação do contrato?')) this.store.dispatch(unpauseContract());
  }

  clearResult(): void {
    this.store.dispatch(clearDfnsTxState());
  }
}
