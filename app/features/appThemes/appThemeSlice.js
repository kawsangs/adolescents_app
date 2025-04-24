import { createSlice } from '@reduxjs/toolkit'
import Theme from '../../models/Theme';
import themes from '../../db/json/themes.json';

const defaultFromJson = {
  ...themes[0],
  android_images: (!!themes[0].assets && !!themes[0].assets.android) ? JSON.stringify(themes[0].assets.android) : null,
  ios_images: (!!themes[0].assets && !!themes[0].assets.ios) ? JSON.stringify(themes[0].assets.ios) : null,
};

const defaultTheme = Theme.getDefault() || defaultFromJson;

const initialState = {
  value: {
    id: defaultTheme.id,
    primary_color: defaultTheme.primary_color,
    secondary_color: defaultTheme.secondary_color,
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