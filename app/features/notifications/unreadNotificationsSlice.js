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
    setUnreadNotification: (state) => {
      state.value = Notification.getUnreads().length;
    },
    resetNotification: (state) => {
      state.value = 0;
    }
  }
})

export const { increaseNotification, resetNotification, setUnreadNotification } = unreadNotificationsSlice.actions
export default unreadNotificationsSlice.reducer
