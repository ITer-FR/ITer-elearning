import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCategories = createAsyncThunk('formation/categories/getAll', async (_, { extra }) => {
  const categories = await extra.categoriesGateway.getAll();

  return categories;
});
