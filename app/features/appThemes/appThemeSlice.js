import { createSlice } from '@reduxjs/toolkit'
import Theme from '../../models/Theme';

const defaultTheme = Theme.getDefault();

const initialState = {
  value: {
    id: defaultTheme.id,
    primary_color: defaultTheme.primary_color,
    secondary_color: defaultTheme.secondary_color,
    text_primary_color: defaultTheme.text_primary_color,
    text_secondary_color: defaultTheme.text_secondary_color,
    android_images: defaultTheme.android_images,
    ios_images: defaultTheme.ios_images
  }
}

const appThemeSlice = createSlice({
  name: 'appTheme',
  initialState,
  reducers: {
    setAppTheme: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const {setAppTheme} = appThemeSlice.actions;
export default appThemeSlice.reducer;