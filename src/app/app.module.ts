import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityInterceptor } from './core/interceptors/security.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { userReducer } from './store/user/user.reducer';
import { balanceReducer } from './store/balance/balance.reducer';
import { BalanceEffects } from './store/balance/balance.effects';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth/auth.service';

import { DevicesService } from './devices/devices.service';
import { ExchangeService } from './crypto/exchange.service';
import { OrdersService } from './orders/orders.service';
import { CoinMarketCapService } from './crypto/coinmarketcap.service';
import { WalletService } from './crypto/wallet.service';
import { TradeService } from './trade/trade.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({ user: userReducer, balance: balanceReducer }),
    EffectsModule.forRoot([BalanceEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (auth: AuthService) => () => auth.initializeApp(),
      deps: [AuthService],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DevicesService,
    TradeService,
    OrdersService,
    ExchangeService,
    CoinMarketCapService,
    WalletService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
