import { UserState, UserAction } from './types';

const initialState: UserState = {
  user: null,
  loading: true,
  errors: [],
};

export default function user(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case '@user/LOAD_USER_REQUEST':
      return {
        ...state,
        loading: true,
        errors: [],
      };
    case '@user/LOAD_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        errors: [],
        user: action.payload.user,
      };
    case '@user/LOAD_USER_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
        user: null,
      };

    default:
      return state;
  }
}
