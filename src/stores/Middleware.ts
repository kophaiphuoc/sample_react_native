import {MiddlewareAPI, Dispatch, AnyAction} from '@reduxjs/toolkit';

function customMiddleware(store: MiddlewareAPI) {
  return (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    console.log('Action:', action);
    const result = next(action);
    console.log('New State:', store.getState());
    return result;
  };
}

export default customMiddleware;
