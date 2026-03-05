import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * Security interceptor:
 * - Adds `X-Requested-With: XMLHttpRequest` to all BFF requests (CSRF defense).
 * - Ensures credentials (HTTP-only cookie) are always sent to the BFF.
 *   Tokens are NEVER stored in localStorage or sessionStorage.
 */
@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!req.url.startsWith(environment.bffUrl)) {
      return next.handle(req);
    }

    const secureReq = req.clone({
      setHeaders: { 'X-Requested-With': 'XMLHttpRequest' },
      withCredentials: true,
    });

    return next.handle(secureReq);
  }
}
