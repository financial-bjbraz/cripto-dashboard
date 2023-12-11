import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevicesService } from './devices/devices.service';
import { ExchangeService } from './crypto/exchange.service';
import { OrdersService } from './orders/orders.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { RecentordersComponent } from './recentorders/recentorders.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { SupportComponent } from './support/support.component';
import { RecentactivityComponent } from './recentactivity/recentactivity.component';
import { TeammembersComponent } from './teammembers/teammembers.component';
import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CryptoComponent } from './crypto/crypto.component';
import { TradeComponent } from './trade/trade.component';
import { TradeService } from './trade/trade.service';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/exchange',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'exchange',
    component: CryptoComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    OrdersComponent,
    VisitorsComponent,
    RecentordersComponent,
    QuicklinksComponent,
    SupportComponent,
    RecentactivityComponent,
    TeammembersComponent,
    MenuComponent,
    TopbarComponent,
    DashboardComponent,
    CryptoComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DevicesService, TradeService, OrdersService, ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
