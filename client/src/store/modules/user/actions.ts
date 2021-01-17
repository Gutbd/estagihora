import { action } from 'typesafe-actions';

export function loadUserRequest() {
  return action('@user/LOAD_USER_REQUEST');
}

export function loadUserSuccess({ user }: { user: object }) {
  return action('@user/LOAD_USER_SUCCESS', { user });
}

export function loadUserFailure({ errors }: { errors: [] }) {
  return action('@user/LOAD_USER_FAILURE', { errors });
}
