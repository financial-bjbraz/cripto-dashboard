import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { DevicesComponent } from '../devices/devices.component';
import { OrdersComponent } from '../orders/orders.component';
import { VisitorsComponent } from '../visitors/visitors.component';
import { RecentordersComponent } from '../recentorders/recentorders.component';
import { QuicklinksComponent } from '../quicklinks/quicklinks.component';
import { SupportComponent } from '../support/support.component';
import { RecentactivityComponent } from '../recentactivity/recentactivity.component';
import { TeammembersComponent } from '../teammembers/teammembers.component';
import { BalanceComponent } from '../balance/balance.component';
import { TradeComponent } from '../trade/trade.component';
import { BuyBrlnComponent } from '../buy-brln/buy-brln.component';
import { SellBrlnComponent } from '../sell-brln/sell-brln.component';

const SHARED_COMPONENTS = [
  MenuComponent,
  TopbarComponent,
  DevicesComponent,
  OrdersComponent,
  VisitorsComponent,
  RecentordersComponent,
  QuicklinksComponent,
  SupportComponent,
  RecentactivityComponent,
  TeammembersComponent,
  BalanceComponent,
  TradeComponent,
  BuyBrlnComponent,
  SellBrlnComponent,
];

@NgModule({
  declarations: SHARED_COMPONENTS,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [...SHARED_COMPONENTS, CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}
