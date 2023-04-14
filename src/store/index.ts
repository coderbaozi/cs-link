import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

export default store
