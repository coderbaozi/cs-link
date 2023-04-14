import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    userReducer: userSlice,
  },
})

export default store
