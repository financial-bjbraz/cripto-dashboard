import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DfnsWallet } from '../../store/admin/admin.state';

@Injectable({ providedIn: 'root' })
export class DfnsAngularService {
  private base = `${environment.bffUrl}/dfns`;

  constructor(private http: HttpClient) {}

  getWallet(): Observable<DfnsWallet> {
    return this.http.get<DfnsWallet>(`${this.base}/wallet`, { withCredentials: true });
  }

  deployContract(params: {
    name: string;
    symbol: string;
    decimals: number;
    initialAdmin: string;
    network?: string;
  }): Observable<{ txId: string; status: string; contractAddress: string | null }> {
    return this.http.post<any>(`${this.base}/contract/deploy`, params, { withCredentials: true });
  }

  getDeployStatus(txId: string): Observable<{ txId: string; status: string; contractAddress: string | null }> {
    return this.http.get<any>(`${this.base}/contract/deploy/status/${txId}`, { withCredentials: true });
  }

  mintTokens(toAddress: string, amount: number): Observable<{ txId: string; status: string }> {
    return this.http.post<any>(`${this.base}/contract/mint`, { toAddress, amount }, { withCredentials: true });
  }

  burnTokens(toAddress: string, amount: number): Observable<{ txId: string; status: string }> {
    return this.http.post<any>(`${this.base}/contract/burn`, { toAddress, amount }, { withCredentials: true });
  }

  pauseContract(): Observable<{ txId: string; status: string }> {
    return this.http.post<any>(`${this.base}/contract/pause`, {}, { withCredentials: true });
  }

  unpauseContract(): Observable<{ txId: string; status: string }> {
    return this.http.post<any>(`${this.base}/contract/unpause`, {}, { withCredentials: true });
  }

  transfer(toAddress: string, amountBrln: number): Observable<{ txId: string; status: string; explorerUrl?: string }> {
    return this.http.post<any>(`${this.base}/transfers`, { toAddress, amountBrln }, { withCredentials: true });
  }
}
