import { createSlice } from '@reduxjs/toolkit'

const initialState = { isGridView: true };

const subCategoryDisplayModeSlice = createSlice({
  name: 'subCategoryDisplayMode',
  initialState,
  reducers: {
    setIsGridView: (state, action) => {
      state.isGridView = action.payload;
    }
  }
});

export const { setIsGridView } =  subCategoryDisplayModeSlice.actions;
export default subCategoryDisplayModeSlice.reducer;