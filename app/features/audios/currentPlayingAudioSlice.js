import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: null };

const currentPlayingAudioSlice = createSlice({
  name: 'currentPlayingAudio',
  initialState,
  reducers: {
    setPlayingAudio: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const {setPlayingAudio} = currentPlayingAudioSlice.actions;
export default currentPlayingAudioSlice.reducer;