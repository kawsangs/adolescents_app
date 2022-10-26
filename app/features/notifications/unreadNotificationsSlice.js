import { createSlice } from '@reduxjs/toolkit'
import Notification from '../../models/Notification'

const initialState = {
  value: Notification.getUnreads() || []
}

const unreadNotificationsSlice = createSlice({
  name: 'unreadNotifications',
  initialState,
  reducers: {
    refreshNotification: (state) => {
      state.value = Notification.getUnreads();
    }
  }
})

export const { refreshNotification } = unreadNotificationsSlice.actions
export default unreadNotificationsSlice.reducer