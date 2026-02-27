import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CoinMarketCapResponse, CryptoCurrency } from './crypto-price.model';

// NOTE: CoinMarketCap Pro API requires an API key from https://coinmarketcap.com/api/
// Direct browser calls to the Pro API may hit CORS restrictions.
// For production use, route requests through a backend proxy or server-side function.
// The sandbox API (sandbox-api.coinmarketcap.com) can be used for development with the demo key.
@Injectable()
export class CoinMarketCapService {
  private readonly SANDBOX_URL = 'https://sandbox-api.coinmarketcap.com/v1';
  private readonly PRO_URL = 'https://pro-api.coinmarketcap.com/v1';

  // Sandbox demo key — returns fake data. Replace with your real key in environment.ts
  private readonly DEMO_KEY = 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c';

  private get apiKey(): string {
    return (environment as any).coinMarketCapApiKey || this.DEMO_KEY;
  }

  private get baseUrl(): string {
    return (environment as any).coinMarketCapApiKey ? this.PRO_URL : this.SANDBOX_URL;
  }

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-CMC_PRO_API_KEY': this.apiKey,
      'Accept': 'application/json'
    });
  }

  getListings(limit: number = 20): Observable<CryptoCurrency[]> {
    return this.http.get<CoinMarketCapResponse>(
      `${this.baseUrl}/cryptocurrency/listings/latest?limit=${limit}&convert=USD`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => res.data),
      catchError(err => {
        console.error('CoinMarketCap API error:', err);
        return throwError(() => err);
      })
    );
  }

  searchBySymbol(symbol: string): Observable<CryptoCurrency[]> {
    return this.http.get<CoinMarketCapResponse>(
      `${this.baseUrl}/cryptocurrency/quotes/latest?symbol=${symbol.toUpperCase()}&convert=USD`,
      { headers: this.getHeaders() }
    ).pipe(
      map(res => {
        // quotes/latest returns an object keyed by symbol, normalize to array
        const data = res.data as any;
        if (Array.isArray(data)) return data as CryptoCurrency[];
        return Object.values(data) as CryptoCurrency[];
      }),
      catchError(err => {
        console.error('CoinMarketCap search error:', err);
        return throwError(() => err);
      })
    );
  }
}
