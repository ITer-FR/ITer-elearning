import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from './sign-in';

export const signUp = createAsyncThunk('auth/signup', async ({ email, password }, { extra, dispatch }) => {
  const user = await extra.usersGateway.createUserWithEmailAndPassword({ email, password });

  dispatch(signIn({ email, password }));

  return user;
});
