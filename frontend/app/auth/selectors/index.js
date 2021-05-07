export const getSelectors = (getAuthSliceState) => ({
  selectAuthUser: (rootState) => getAuthSliceState(rootState).user,
});
