import { getAllCategories } from './use-cases';
import { categoryAdapter } from './entities';

export const extraReducers = {
  [getAllCategories.fulfilled]: (formationState, action) => {
    categoryAdapter.setAll(formationState.categories, action.payload);
  },
  // TODO : [getFormationsByCategory.fulfilled]
};
