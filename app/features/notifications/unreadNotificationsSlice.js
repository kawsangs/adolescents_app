import { createSlice } from '@reduxjs/toolkit'
import Notification from '../../models/Notification'

const initialState = {
  value: Notification.getUnreads().length || 0
}

const unreadNotificationsSlice = createSlice({
  name: 'unreadNotifications',
  initialState,
  reducers: {
    increaseNotification: (state) => {
      state.value += 1;
    },
    resetNotification: (state) => {
      state.value = 0;
    }
  }
})

export const { increaseNotification, resetNotification } = unreadNotificationsSlice.actions
export default unreadNotificationsSlice.reducer
