import { configureStore } from '@reduxjs/toolkit'
import unreadNotificationsReducer from './features/notifications/unreadNotificationsSlice'
import filterFacilityLocationReducer from './features/facilities/filterFacilityLocationSlice';
import subCategoryDisplayModeReducer from './features/subCategories/subCategoryDisplayModeSlice';
import filterVideoAuthorReducer from './features/videos/filterVideoAuthorSlice';
import loginUserOccupationReducer from './features/users/loginUserOccupationSlice';
import parentCategoryReducer from './features/parentCategories/parentCategorySlice';
import currentPlayingAudioReducer from './features/audios/currentPlayingAudioSlice';
import appThemeReducer from './features/appThemes/appThemeSlice';
import sdkVersonReducer from './features/sdkVersions/sdkVersionSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: {
    unreadNotifications: unreadNotificationsReducer,
    filterFacilityLocation: filterFacilityLocationReducer,
    subCategoryDisplayMode: subCategoryDisplayModeReducer,
    filterVideoAuthor: filterVideoAuthorReducer,
    loginUserOccupation: loginUserOccupationReducer,
    parentCategory: parentCategoryReducer,
    currentPlayingAudio: currentPlayingAudioReducer,
    appTheme: appThemeReducer,
    sdkVersion: sdkVersonReducer,
  }
})