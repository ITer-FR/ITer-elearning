import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer } from './auth';
import { reducer as formationReducer } from './formation';

export const createStore = ({ usersGateway, categoriesGateway } = {}) =>
  configureStore({
    reducer: combineReducers({
      ...authReducer,
      ...formationReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            usersGateway,
            categoriesGateway,
          },
        },
      }),
  });
