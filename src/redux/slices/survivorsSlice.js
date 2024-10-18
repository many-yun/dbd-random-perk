import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('checkedSurvivors')) || []

const survivorsSlice = createSlice({
  name: 'survivors',
  initialState,
  reducers: {
    setSurvivors: (state, action) => {
      localStorage.setItem('checkedSurvivors', JSON.stringify(action.payload))
      return action.payload
    },
  },
})

export const { setSurvivors } = survivorsSlice.actions
export default survivorsSlice.reducer
