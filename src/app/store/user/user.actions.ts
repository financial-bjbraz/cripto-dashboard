import { createAction, props } from '@ngrx/store';
import { AuthUser } from '../../auth/auth.service';

export const setUser = createAction('[User] Set User', props<{ user: AuthUser }>());
export const clearUser = createAction('[User] Clear User');
