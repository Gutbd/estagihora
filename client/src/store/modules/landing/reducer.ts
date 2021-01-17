import { LandingState, LandingAction } from './types';

const initialState: LandingState = {
  showSignIn: true,
  showSignUp: false,
};

export default function landing(
  state = initialState,
  action: LandingAction
): LandingState {
  switch (action.type) {
    case '@landing/SHOW_SIGN_UP':
      return {
        ...state,
        showSignIn: false,
        showSignUp: true,
      };
    case '@landing/SHOW_SIGN_IN':
      return initialState;

    default:
      return state;
  }
}
