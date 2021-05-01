/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getCategoryList } from './repository/in-memory';

const initialState = {
  loading: false,
  formationsData: {},
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [getCategoryList.pending]: (state) => {
      state.loading = true;
    },
    [getCategoryList.fulfilled]: (state, action) => {
      state.loading = false;
      state.formationsData = action.payload.reduce(
        (formations, currentFormation) => ({
          ...formations,
          [currentFormation.id]: currentFormation,
        }),
        {}
      );
    },
  },
});

export const createSelector = (selector) => (state) => selector(state.formation);

export const { reducer, actions: events } = categorySlice;
