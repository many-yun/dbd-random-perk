import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checkedCharacters: JSON.parse(localStorage.getItem('checkedCharacters')) || [],
}

export const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    setCheckedKillers: (state, action) => {
      state.characters = action.payload
      localStorage.setItem('checkedKillers', JSON.stringify(state.characters))
    },
  },
})

export const { setCheckedKillers } = checkboxSlice.actions
export default checkboxSlice.reducer
