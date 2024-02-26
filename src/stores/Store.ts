import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './RootReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import customMiddleware from './Middleware';

const store = configureStore({
  reducer: rootReducer,
  // midldleware
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware().concat(customMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
