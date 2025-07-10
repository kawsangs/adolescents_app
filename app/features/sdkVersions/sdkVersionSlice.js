import { createSlice } from '@reduxjs/toolkit'
import { MIN_MODERN_ANDROID_SDK_LEVEL } from '../../constants/main_constant';

const initialState = {
  value: MIN_MODERN_ANDROID_SDK_LEVEL
}

const sdkVersionSlice = createSlice({
  name: 'sdkVersion',
  initialState,
  reducers: {
    setSdkVersion: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setSdkVersion } = sdkVersionSlice.actions;
export default sdkVersionSlice.reducer;