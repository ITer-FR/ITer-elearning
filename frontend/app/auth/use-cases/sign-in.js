import { createAsyncThunk } from '@reduxjs/toolkit';

export const signIn = createAsyncThunk('auth/signin', async ({ email, password }, { extra }) => {
  const user = await extra.usersGateway.signInWithEmailAndPassword({ email, password });

  return user;
});
