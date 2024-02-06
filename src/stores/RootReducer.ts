import {combineReducers} from '@reduxjs/toolkit';
import loginAuthSlice from '../features/auth/LoginSlice';

const rootReducer = combineReducers({
  login: loginAuthSlice,
});

export default rootReducer;
