import { configureStore } from '@reduxjs/toolkit'
import unreadNotificationsReducer from './features/notifications/unreadNotificationsSlice'
import filterFacilityLocationReducer from './features/facilities/filterFacilityLocationSlice';
import subCategoryDisplayModeReducer from './features/subCategories/subCategoryDisplayModeSlice';
import filterVideoAuthorReducer from './features/videos/filterVideoAuthorSlice';
import loginUserOccupationReducer from './features/users/loginUserOccupationSlice';
import parentCategoryReducer from './features/parentCategories/parentCategorySlice';

export const store = configureStore({
  reducer: {
    unreadNotifications: unreadNotificationsReducer,
    filterFacilityLocation: filterFacilityLocationReducer,
    subCategoryDisplayMode: subCategoryDisplayModeReducer,
    filterVideoAuthor: filterVideoAuthorReducer,
    loginUserOccupation: loginUserOccupationReducer,
    parentCategory: parentCategoryReducer,
  }
})