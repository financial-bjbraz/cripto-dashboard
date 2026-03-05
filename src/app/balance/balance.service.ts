import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface UserBalance {
  fiatBalance: number;
  brlnBalance: number;
}

@Injectable({ providedIn: 'root' })
export class BalanceService {
  private cache$ = new BehaviorSubject<UserBalance | null>(null);
  private refreshTrigger$ = new Subject<void>();

  /** Emits whenever a refresh should occur (e.g. after buy/sell). */
  readonly refresh$ = this.refreshTrigger$.asObservable();

  /** Last successfully fetched balance (null before first load). */
  get lastBalance(): UserBalance | null {
    return this.cache$.getValue();
  }

  constructor(private http: HttpClient) {}

  getBalance(): Observable<UserBalance> {
    return this.http
      .get<UserBalance>(`${environment.bffUrl}/user/balance`, { withCredentials: true })
      .pipe(tap(b => this.cache$.next(b)));
  }

  /** Call after a transaction to make BalanceComponent reload. */
  triggerRefresh(): void {
    this.refreshTrigger$.next();
  }
}
