import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface SellBrlnRequest {
  amount: number;
}

export interface SellBrlnResponse {
  txId: string;
  amount: number;
  fiatBalance: number;
  brlnBalance: number;
  status?: string;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class SellBrlnService {
  constructor(private http: HttpClient) {}

  sell(amount: number): Observable<SellBrlnResponse> {
    return this.http.post<SellBrlnResponse>(
      `${environment.bffUrl}/brln/sell`,
      { amount },
      { withCredentials: true }
    );
  }
}
