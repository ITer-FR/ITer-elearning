import { createSelector } from '..';

export const selectFormationList = createSelector((formationState) => Object.values(formationState.formationsData));
