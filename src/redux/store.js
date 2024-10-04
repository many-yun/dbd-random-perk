import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './slices/checkboxSlice'

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
})

export default store
