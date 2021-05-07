import { signUp, signIn } from './use-cases';

export const extraReducers = {
  [signUp.fulfilled]: (authState, action) => {
    authState.user.email = action.payload.email;
  },
  [signIn.fulfilled]: (authState, action) => {
    authState.user = action.payload;
    authState.user.isAuthenticated = true;
  },
};
