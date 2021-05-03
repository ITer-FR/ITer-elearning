/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFormationList } from './use-cases/get-formation-list';

const initialState = {
  loading: false,
  formationsData: {},
};

const formationSlice = createSlice({
  name: 'formation',
  initialState,
  reducers: {},
  extraReducers: {
    [getFormationList.pending]: (state) => {
      state.loading = true;
    },
    [getFormationList.fulfilled]: (state, action) => {
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

export const { reducer, actions: events } = formationSlice;
