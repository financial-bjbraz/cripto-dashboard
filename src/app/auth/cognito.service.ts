import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client-ts';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CognitoService {
  private userManager: UserManager;

  constructor() {
    this.userManager = new UserManager(environment.oidcConfig);
  }

  /** Redirects to Cognito Hosted UI (Authorization Code + PKCE). */
  startLogin(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  /** Exchanges the authorization code for tokens after Cognito redirects back. */
  handleCallback(): Promise<User> {
    return this.userManager.signinRedirectCallback();
  }

  /** Removes the OIDC user from local storage (no server-side redirect). */
  removeUser(): void {
    this.userManager.removeUser();
  }
}
