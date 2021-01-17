import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export interface AuthState {
  readonly loading: boolean;
  readonly isSignedIn: boolean;
  readonly errors: any[];
  readonly token: string | null;
  readonly showSignIn: boolean;
  readonly showSignUp: boolean;
}
