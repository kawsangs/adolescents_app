import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: null };

const filterVideoAuthorSlice = createSlice({
  name: 'filterFacilityLocation',
  initialState,
  reducers: {
    storeSelectedAuthor: (state = initialState, action) => {
      state.name = action.payload.name;
    },
    resetSelectedAuthor: (state) => {
      state.name = null;
    }
  }
});

export const { storeSelectedAuthor, resetSelectedAuthor } = filterVideoAuthorSlice.actions;
export default filterVideoAuthorSlice.reducer;