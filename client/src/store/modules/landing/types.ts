import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LandingAction = ActionType<typeof actions>;

export interface LandingState {
  readonly showSignIn: boolean;
  readonly showSignUp: boolean;
}
