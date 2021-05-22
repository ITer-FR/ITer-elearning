import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer } from './auth';

export const createStore = ({ usersGateway } = {}) =>
  configureStore({
    reducer: combineReducers({
      ...authReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            usersGateway,
          },
        },
      }),
  });
