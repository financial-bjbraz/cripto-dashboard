import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BuyBrlnService, BuyBrlnResponse } from './buy-brln.service';
import { AppState } from '../store/app.state';
import { updateBalance } from '../store/balance/balance.actions';
import { selectFiatBalance } from '../store/balance/balance.selectors';

@Component({
  selector: 'app-buy-brln',
  templateUrl: './buy-brln.component.html',
  styleUrls: ['./buy-brln.component.css'],
})
export class BuyBrlnComponent implements OnInit, OnDestroy {
  form: FormGroup;
  loading = false;
  errorMessage = '';
  pendingMessage = '';
  result: BuyBrlnResponse | null = null;
  availableFiat = 0;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private buyService: BuyBrlnService,
    private store: Store<AppState>
  ) {
    this.form = this.fb.group({
      amount: [
        '',
        [
          Validators.required,
          Validators.min(0.01),
          (ctrl: AbstractControl): ValidationErrors | null => {
            const val = parseFloat(ctrl.value);
            if (!isNaN(val) && this.availableFiat > 0 && val > this.availableFiat) {
              return { insufficientBalance: true };
            }
            return null;
          },
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.store.select(selectFiatBalance)
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => { this.availableFiat = v; });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get amount() { return this.form.get('amount')!; }

  formatBRL(value: number): string {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const amountVal = parseFloat(this.amount.value);
    this.loading = true;
    this.errorMessage = '';
    this.result = null;

    this.buyService.buy(amountVal).subscribe({
      next: res => {
        this.loading = false;
        this.form.reset();
        if (res.status === 'pending') {
          this.pendingMessage = res.message ?? 'Transação aguardando aprovação do admin.';
        } else {
          this.result = res;
          this.store.dispatch(updateBalance({ fiatBalance: res.fiatBalance, brlnBalance: res.brlnBalance }));
        }
      },
      error: err => {
        this.errorMessage = err?.error?.message ?? 'Erro ao processar a compra.';
        this.loading = false;
      },
    });
  }

  reset(): void {
    this.result = null;
    this.errorMessage = '';
    this.pendingMessage = '';
    this.form.reset();
  }
}
