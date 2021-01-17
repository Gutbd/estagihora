import { action } from 'typesafe-actions';

export function showSignIn() {
  return action('@landing/SHOW_SIGN_IN');
}

export function showSignUp() {
  return action('@landing/SHOW_SIGN_UP');
}
