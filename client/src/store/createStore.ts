/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';
import { AuthAction, AuthState } from './modules/auth/types';
import { LandingAction, LandingState } from './modules/landing/types';
import { UserAction, UserState } from './modules/user/types';
import { CheckpointAction, CheckpointState } from './modules/checkpoint/types';

export interface StoreState {
  auth: AuthState;
  landing: LandingState;
  user: UserState;
  checkpoint: CheckpointState;
}

export type StoreAction =
  | AuthAction
  | LandingAction
  | UserAction
  | CheckpointAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
