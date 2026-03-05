import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from '../store/app.state';
import { setUser, clearUser } from '../store/user/user.actions';
import { CognitoService } from './cognito.service';

export interface AuthUser {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

const SESSION_KEY = 'brln_auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;
  private currentUser: AuthUser | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>,
    private cognito: CognitoService
  ) {
    // Restore session flag across page refreshes.
    // The actual session lives in the HTTP-only cookie managed by the BFF.
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      try {
        this.currentUser = JSON.parse(stored) as AuthUser;
        this.loggedIn = true;
      } catch {
        sessionStorage.removeItem(SESSION_KEY);
      }
    }
  }

  /**
   * Called by APP_INITIALIZER before the router activates.
   * If Cognito redirected back with ?code=..., exchange it for tokens
   * and establish a BFF session. Otherwise restore store from sessionStorage.
   */
  initializeApp(): Promise<void> {
    const params = new URLSearchParams(window.location.search);
    if (params.has('code') && params.has('state')) {
      return this.handleCallbackAsync();
    }
    this.syncStoreUser();
    return Promise.resolve();
  }

  /** Redirects the browser to Cognito Hosted UI. */
  startLogin(): void {
    this.cognito.startLogin();
  }

  private handleCallbackAsync(): Promise<void> {
    return this.cognito.handleCallback().then(oidcUser => {
      if (!oidcUser?.id_token) {
        throw new Error('No id_token');
      }
      return new Promise<void>((resolve, reject) => {
        this.http.post<{ user: AuthUser }>(
          `${environment.bffUrl}/auth/login`,
          { idToken: oidcUser.id_token },
          { withCredentials: true }
        ).subscribe({
          next: res => {
            this.currentUser = res.user;
            this.loggedIn = true;
            sessionStorage.setItem(SESSION_KEY, JSON.stringify(res.user));
            this.store.dispatch(setUser({ user: res.user }));
            resolve();
          },
          error: reject,
        });
      });
    }).catch(() => {
      // swallow — user stays unauthenticated and will be redirected to /login by AuthGuard
    }).finally(() => {
      // Remove code/state from URL so Angular router sees a clean path
      window.history.replaceState({}, document.title, window.location.pathname);
    });
  }

  logout(): void {
    this.loggedIn = false;
    this.currentUser = null;
    sessionStorage.removeItem(SESSION_KEY);
    this.store.dispatch(clearUser());
    this.cognito.removeUser();
    this.http
      .post(`${environment.bffUrl}/auth/logout`, {}, { withCredentials: true })
      .subscribe({ error: () => {} });
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  getUser(): AuthUser | null {
    return this.currentUser;
  }

  syncStoreUser(): void {
    if (this.currentUser) {
      this.store.dispatch(setUser({ user: this.currentUser }));
    }
  }
}
