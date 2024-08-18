import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const nameProfileSlice = createSlice({
  name: 'nameProfile',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.value = String(action.payload);
      console.log('acrion payload:', typeof(action.payload))
    },
  },
})

export const { setInputValue } = nameProfileSlice.actions

export default nameProfileSlice.reducer