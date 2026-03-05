import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { environment } from '../../../environments/environment';

/**
 * Intercepts 401 responses from the BFF and automatically logs the user out,
 * preserving the current URL as a returnUrl so the user lands back on the
 * same page after re-authenticating.
 *
 * Skips the login endpoint itself to avoid redirect loops on bad credentials.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private loggingOut = false;

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (
          err.status === 401 &&
          req.url.startsWith(environment.bffUrl) &&
          !req.url.includes('/auth/login') &&
          !this.loggingOut
        ) {
          this.loggingOut = true;
          this.authService.logout();
          // Reset flag after navigation settles
          setTimeout(() => { this.loggingOut = false; }, 2000);
        }
        return throwError(() => err);
      })
    );
  }
}
