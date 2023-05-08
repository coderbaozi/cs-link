import { createSlice } from '@reduxjs/toolkit'

export interface IUser {
  userId: number
  username: string
  email: string
  avater: string
  followerCount: number
  followeeCount: number
  articleCount: number
  notificationUnread: number
  inboxUnread: number
  bio: string
  createTime: string
}
export interface ILoginUser {
  username: string
  password: string
}
interface IUserState {
  userInfo: IUser | undefined
  token: string | undefined
}

const initialState: IUserState = {
  userInfo: {} as IUser,
  token: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    removeUserInfo: (state) => {
      state.token = undefined
      state.userInfo = undefined
    },
  },
})

export default userSlice.reducer

export const { setToken, setUserInfo, removeUserInfo } = userSlice.actions
