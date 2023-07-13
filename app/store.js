import { configureStore } from '@reduxjs/toolkit'
import unreadNotificationsReducer from './features/notifications/unreadNotificationsSlice'
import filterFacilityLocationReducer from './features/facilities/filterFacilityLocationSlice';
import subCategoryDisplayModeReducer from './features/subCategories/subCategoryDisplayModeSlice';
import filterVideoAuthorReducer from './features/videos/filterVideoAuthorSlice';
import currentLoginUserReducer from './features/users/currentLoginUserSlice';

export const store = configureStore({
  reducer: {
    unreadNotifications: unreadNotificationsReducer,
    filterFacilityLocation: filterFacilityLocationReducer,
    subCategoryDisplayMode: subCategoryDisplayModeReducer,
    filterVideoAuthor: filterVideoAuthorReducer,
    currentLoginUser: currentLoginUserReducer,
  }
})