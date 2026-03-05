import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { deployContract, clearDfnsTxState } from '../../../store/admin/admin.actions';
import {
  selectDfnsTxId, selectDfnsTxStatus, selectDfnsContractAddress,
  selectDfnsTxLoading, selectDfnsTxError, selectDfnsWallet,
} from '../../../store/admin/admin.selectors';

@Component({
  selector: 'app-dfns-deploy',
  templateUrl: './dfns-deploy.component.html',
  styleUrls: ['./dfns-deploy.component.css'],
})
export class DfnsDeployComponent implements OnInit {
  form: FormGroup;
  txId$ = this.store.select(selectDfnsTxId);
  txStatus$ = this.store.select(selectDfnsTxStatus);
  contractAddress$ = this.store.select(selectDfnsContractAddress);
  loading$ = this.store.select(selectDfnsTxLoading);
  error$ = this.store.select(selectDfnsTxError);
  wallet$ = this.store.select(selectDfnsWallet);

  networks = ['EthereumSepolia', 'PolygonAmoy', 'Ethereum'];

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      name:         ['Brazilian Real Note', Validators.required],
      symbol:       ['BRLN', Validators.required],
      decimals:     [2, [Validators.required, Validators.min(0), Validators.max(18)]],
      initialAdmin: ['', Validators.required],
      network:      ['EthereumSepolia', Validators.required],
    });
  }

  ngOnInit(): void {
    this.wallet$.subscribe(w => {
      if (w?.address) this.form.patchValue({ initialAdmin: w.address });
    });
  }

  onDeploy(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { name, symbol, decimals, initialAdmin, network } = this.form.value;
    this.store.dispatch(deployContract({ name, symbol, decimals: Number(decimals), initialAdmin, network }));
  }

  reset(): void {
    this.store.dispatch(clearDfnsTxState());
    this.form.reset({ name: 'Brazilian Real Note', symbol: 'BRLN', decimals: 2, network: 'EthereumSepolia' });
  }

  copy(text: string): void {
    navigator.clipboard.writeText(text).catch(() => {});
  }
}
