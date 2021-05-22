import { createSlice } from '@reduxjs/toolkit';
import { categoryAdapter } from './entities';
import { extraReducers } from './extra-reducers';

const initialState = {
  categories: categoryAdapter.getInitialState(),
};

const slice = createSlice({
  name: 'formation',
  initialState,
  extraReducers,
});

export const reducer = {
  [slice.name]: slice.reducer,
};

export const { getAllCategories } = slice.actions;

const selectSliceState = (rootState) => rootState[slice.name];

export const selectors = {
  categories: categoryAdapter.getSelectors((rootState) => selectSliceState(rootState).categories),
  // TODO : formations selectors
};
