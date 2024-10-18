import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('checkedKillers')) || []

const killersSlice = createSlice({
  name: 'killers',
  initialState,
  reducers: {
    setKillers: (state, action) => {
      localStorage.setItem('checkedKillers', JSON.stringify(action.payload))
      return action.payload
    },
  },
})

export const { setKillers } = killersSlice.actions
export default killersSlice.reducer
