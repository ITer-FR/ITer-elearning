import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFormationList = createAsyncThunk(
  'formation/getFormationList',
  async (_, { extra: { formationRepository } }) => {
    const formationList = await formationRepository.getAll();

    return formationList;
  }
);
