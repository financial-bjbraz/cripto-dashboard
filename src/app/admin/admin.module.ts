import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { adminReducer } from '../store/admin/admin.reducer';
import { AdminEffects } from '../store/admin/admin.effects';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersBalancesComponent } from './users-balances/users-balances.component';
import { TransactionApprovalComponent } from './transaction-approval/transaction-approval.component';
import { StablecoinTransferComponent } from './stablecoin-transfer/stablecoin-transfer.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UsersBalancesComponent,
    TransactionApprovalComponent,
    StablecoinTransferComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('admin', adminReducer),
    EffectsModule.forFeature([AdminEffects]),
    AdminRoutingModule,
  ],
})
export class AdminModule {}
