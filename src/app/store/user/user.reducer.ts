import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from '../app.state';
import { setUser, clearUser } from './user.actions';

export const initialUserState: UserState = { user: null };

const _userReducer = createReducer(
  initialUserState,
  on(setUser, (state, { user }) => ({ ...state, user })),
  on(clearUser, () => ({ user: null })),
);

export function userReducer(state: UserState | undefined, action: Action): UserState {
  return _userReducer(state, action);
}
