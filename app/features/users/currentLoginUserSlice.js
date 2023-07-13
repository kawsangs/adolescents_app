import { createSlice } from '@reduxjs/toolkit'
import User from '../../models/User'

const initialState = {
  value: User.currentLoggedIn()
}

const currentLoginUserSlice = createSlice({
  name: 'currentLoginUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload;
    },
  }
})

export const {setCurrentUser} = currentLoginUserSlice.actions
export default currentLoginUserSlice.reducer