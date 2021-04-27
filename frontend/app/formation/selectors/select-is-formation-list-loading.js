import { createSelector } from '..';

export const selectIsFormationListLoading = createSelector((formationState) => formationState.loading);
