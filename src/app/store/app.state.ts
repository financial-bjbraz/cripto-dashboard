import { AuthUser } from '../auth/auth.service';
import { AdminState } from './admin/admin.state';

export interface UserState {
  user: AuthUser | null;
}

export interface BalanceState {
  fiatBalance: number;
  brlnBalance: number;
  loading: boolean;
  error: string | null;
}

export interface AppState {
  user: UserState;
  balance: BalanceState;
  admin: AdminState;
}
