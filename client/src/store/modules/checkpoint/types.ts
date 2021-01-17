import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CheckpointAction = ActionType<typeof actions>;

export interface CheckpointState {
  readonly loading: boolean;
  readonly checkpointList: [];
  readonly errors: any[];
}
