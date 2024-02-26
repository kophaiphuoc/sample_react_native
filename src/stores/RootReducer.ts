import {combineReducers} from '@reduxjs/toolkit';
import loginAuthSlice from '../features/auth/LoginSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const slicePersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['data'],
};

const rootReducer = combineReducers({
  login: persistReducer(slicePersistConfig, loginAuthSlice),
});

export default rootReducer;
