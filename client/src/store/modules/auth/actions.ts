import { action } from 'typesafe-actions';

export function signInRequest({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return action('@auth/SIGN_IN_REQUEST', { email, password });
}

export function signInSuccess({ token }: { token: string }) {
  return action('@auth/SIGN_IN_SUCCESS', { token });
}

export function signInFailure({ errors }: { errors: [] }) {
  return action('@auth/SIGN_IN_FAILURE', { errors });
}

export function signUpRequest({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  return action('@auth/SIGN_UP_REQUEST', { name, email, password });
}

export function signUpSuccess({ token }: { token: string }) {
  return action('@auth/SIGN_UP_SUCCESS', { token });
}

export function signUpFailure({ errors }: { errors: [] }) {
  return action('@auth/SIGN_UP_FAILURE', { errors });
}

export function logoutRequest() {
  return action('@auth/LOGOUT_REQUEST');
}

export function showSignIn() {
  return action('@auth/SHOW_SIGN_IN');
}

export function showSignUp() {
  return action('@auth/SHOW_SIGN_UP');
}
