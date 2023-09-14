import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: [] };

const parentCategorySlice = createSlice({
  name: 'parentCategorySlice',
  initialState,
  reducers: {
    setParentCategories: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const {setParentCategories} = parentCategorySlice.actions;
export default parentCategorySlice.reducer;