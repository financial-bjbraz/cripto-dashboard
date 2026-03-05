import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface BuyBrlnRequest {
  amount: number;
}

export interface BuyBrlnResponse {
  txId: string;
  amount: number;
  fiatBalance: number;
  brlnBalance: number;
  status?: string;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class BuyBrlnService {
  constructor(private http: HttpClient) {}

  buy(amount: number): Observable<BuyBrlnResponse> {
    return this.http.post<BuyBrlnResponse>(
      `${environment.bffUrl}/brln/buy`,
      { amount },
      { withCredentials: true }
    );
  }
}
