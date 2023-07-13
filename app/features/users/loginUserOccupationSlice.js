import { createSlice } from '@reduxjs/toolkit'
import User from '../../models/User'

const initialState = {
  value: !!User.currentLoggedIn() ? User.currentLoggedIn().occupation : null
}

const loginUserOccupationSlice = createSlice({
  name: 'loginUserOccupation',
  initialState,
  reducers: {
    setLoginUserOccupation: (state, action) => {
      state.value = action.payload;
    },
  }
})

export const {setLoginUserOccupation} = loginUserOccupationSlice.actions
export default loginUserOccupationSlice.reducer