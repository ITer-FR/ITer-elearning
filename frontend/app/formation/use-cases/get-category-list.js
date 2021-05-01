  import { createAsyncThunk } from '@reduxjs/toolkit';

  export const getFormationList = createAsyncThunk(
    'category/getCategoryList',
    async (_, { extra: { formationRepository } }) => {
      const categoryList = await formationRepository.getAll();
  
      return categoryList;
    }
  );