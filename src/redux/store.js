import { configureStore } from '@reduxjs/toolkit'
import killersReducer from './slices/killersSlice'
import survivorsReducer from './slices/survivorsSlice'

const store = configureStore({
  reducer: {
    killers: killersReducer,
    survivors: survivorsReducer,
  },
})

export default store
