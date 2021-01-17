import { combineReducers } from 'redux';
import { StoreState } from '../createStore';
import auth from './auth/reducer';
import landing from './landing/reducer';
import user from './user/reducer';
import checkpoint from './checkpoint/reducer';

export default combineReducers<StoreState>({ auth, landing, user, checkpoint });
