import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export interface UserState {
  readonly loading: boolean;
  readonly user: object | null;
  readonly errors: any[];
}
