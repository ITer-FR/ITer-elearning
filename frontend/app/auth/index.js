import { createSlice } from '@reduxjs/toolkit';
import { getSelectors } from './selectors';
import { extraReducers } from './extra-reducers';

const initialState = {
  user: {
    id: null,
    email: null,
    isAuthenticated: false,
    token: null,
  },
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers,
});

export const reducer = {
  [slice.name]: slice.reducer,
};

export const selectors = getSelectors((rootState) => rootState[slice.name]);
