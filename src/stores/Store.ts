import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './RootReducer';
// import customMiddleware from './Middleware';

const store = configureStore({
  reducer: rootReducer,
  // midldleware
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware().concat(customMiddleware),
});

export default store;
