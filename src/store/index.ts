import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import navSlice from './features/nav/navSlice'
const store = configureStore({
  reducer: {
    user: userSlice,
    nav: navSlice,
  },
})

export default store
