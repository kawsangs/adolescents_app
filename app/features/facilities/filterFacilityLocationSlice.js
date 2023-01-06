import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: '' };

const filterFacilityLocationSlice = createSlice({
  name: 'filterFacilityLocation',
  initialState,
  reducers: {
    storeSelectedLocation: (state, action) => {
      state.value = action.payload;
    },
    resetSelectedLocation: (state) => {
      state.value = '';
    }
  }
});

export const { storeSelectedLocation, resetSelectedLocation } = filterFacilityLocationSlice.actions;
export default filterFacilityLocationSlice.reducer;