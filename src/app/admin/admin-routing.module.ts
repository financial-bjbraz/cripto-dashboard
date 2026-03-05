import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersBalancesComponent } from './users-balances/users-balances.component';
import { TransactionApprovalComponent } from './transaction-approval/transaction-approval.component';
import { StablecoinTransferComponent } from './stablecoin-transfer/stablecoin-transfer.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'balances', component: UsersBalancesComponent },
  { path: 'approvals', component: TransactionApprovalComponent },
  { path: 'transfer', component: StablecoinTransferComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
