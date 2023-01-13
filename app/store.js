import { configureStore } from '@reduxjs/toolkit'
import unreadNotificationsReducer from './features/notifications/unreadNotificationsSlice'
import filterFacilityLocationReducer from './features/facilities/filterFacilityLocationSlice';

export const store = configureStore({
  reducer: {
    unreadNotifications: unreadNotificationsReducer,
    filterFacilityLocation: filterFacilityLocationReducer
  }
})