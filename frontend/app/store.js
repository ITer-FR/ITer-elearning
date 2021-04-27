import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { reducer as formationReducer } from './formation';

export const createStore = ({ formationRepository } = {}) =>
  configureStore({
    reducer: combineReducers({
      formation: formationReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            formationRepository,
          },
        },
      }),
  });
