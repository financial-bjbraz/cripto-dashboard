import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserWithBalance, GrandTotal, PendingTx, AdminUser } from '../store/admin/admin.state';

export interface UsersBalancesResponse {
  users: UserWithBalance[];
  grandTotal: GrandTotal;
}

export interface TransferRequest {
  fromUserId: string;
  toUserId: string;
  amountFiat: number;
}

export interface TransferResponse {
  txId: string;
  amountBrln: number;
  fromBalance: { brlnBalance: number };
  toBalance: { brlnBalance: number };
  onChain: boolean;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private base = `${environment.bffUrl}/admin`;

  constructor(private http: HttpClient) {}

  getUsersBalances(): Observable<UsersBalancesResponse> {
    return this.http.get<UsersBalancesResponse>(`${this.base}/users/balances`, { withCredentials: true });
  }

  getPendingTransactions(): Observable<{ transactions: PendingTx[] }> {
    return this.http.get<{ transactions: PendingTx[] }>(`${this.base}/transactions/pending`, { withCredentials: true });
  }

  approveTx(txId: string): Observable<any> {
    return this.http.post<any>(`${this.base}/transactions/${txId}/approve`, {}, { withCredentials: true });
  }

  rejectTx(txId: string): Observable<any> {
    return this.http.post<any>(`${this.base}/transactions/${txId}/reject`, {}, { withCredentials: true });
  }

  getUsers(): Observable<{ users: AdminUser[] }> {
    return this.http.get<{ users: AdminUser[] }>(`${this.base}/users`, { withCredentials: true });
  }

  createTransfer(payload: TransferRequest): Observable<TransferResponse> {
    return this.http.post<TransferResponse>(`${this.base}/transfer`, payload, { withCredentials: true });
  }
}
