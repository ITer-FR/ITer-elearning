import { createSelector } from '..';

export const selectFormationListAndLoading = createSelector((formationState) => {
    return { 
        loading: formationState.loading, 
        formationList: Object.values(formationState.formationsData)
    }
})