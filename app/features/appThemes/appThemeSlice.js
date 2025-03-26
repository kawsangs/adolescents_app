import { createSlice } from '@reduxjs/toolkit'
import Theme from '../../models/Theme';
import { originalTheme } from '../../constants/app_theme_constant';

const defaultTheme = Theme.getDefault() ?? originalTheme;

const initialState = {
  value: {
    uuid: defaultTheme.uuid,
    id: defaultTheme.id,
    primary_color: defaultTheme.primary_color,
    secondary_color: defaultTheme.secondary_color,
    primary_text_color: defaultTheme.primary_text_color,
    secondary_text_color: defaultTheme.secondary_text_color,
    android_images: defaultTheme.android_images,
    ios_images: defaultTheme.ios_images
  },
  items: Theme.getAll()
}

const appThemeSlice = createSlice({
  name: 'appTheme',
  initialState,
  reducers: {
    setSelectedAppTheme: (state, action) => {
      state.value = action.payload;
    },
    setAppThemes: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const {setSelectedAppTheme, setAppThemes} = appThemeSlice.actions;
export default appThemeSlice.reducer;