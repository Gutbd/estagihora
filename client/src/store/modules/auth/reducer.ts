import { AuthState, AuthAction } from './types';

const initialState: AuthState = {
  loading: false,
  isSignedIn: false,
  errors: [],
  token: null,
  showSignIn: true,
  showSignUp: false,
};

export default function auth(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
    case '@auth/SIGN_UP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case '@auth/SIGN_UP_FAILURE':
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
      };
    case '@auth/SIGN_IN_SUCCESS':
    case '@auth/SIGN_UP_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        errors: [],
        token: action.payload.token,
        isSignedIn: true,
      };
    case '@auth/LOGOUT_REQUEST':
      localStorage.removeItem('token');
      return {
        ...state,
        errors: [],
        token: null,
        isSignedIn: false,
        loading: false,
      };
    case '@auth/SHOW_SIGN_UP':
      return {
        ...state,
        showSignIn: false,
        showSignUp: true,
        errors: [],
      };
    case '@auth/SHOW_SIGN_IN':
      return {
        ...state,
        showSignIn: true,
        showSignUp: false,
        errors: [],
      };

    default:
      return state;
  }
}
