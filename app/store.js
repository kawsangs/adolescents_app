import { configureStore } from '@reduxjs/toolkit'
import unreadNotificationsReducer from './features/notifications/unreadNotificationsSlice'

export const store = configureStore({
  reducer: {
    unreadNotifications: unreadNotificationsReducer
  }
})