import { createSlice } from '@reduxjs/toolkit'

const initialState = { uuid: null };

const filterVideoAuthorSlice = createSlice({
  name: 'filterVideoAuthor',
  initialState,
  reducers: {
    storeSelectedVidAuthor: (state = initialState, action) => {
      state.uuid = action.payload.uuid;
    },
    resetSelectedVidAuthor: (state) => {
      state.uuid = null;
    }
  }
});

export const { storeSelectedVidAuthor, resetSelectedVidAuthor } = filterVideoAuthorSlice.actions;
export default filterVideoAuthorSlice.reducer;