import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('auth/signup', async ({ email }) => ({ email }));
