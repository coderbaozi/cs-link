import React, { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import { useFormInput } from '@/hooks/useFormInput'
import { login, getUserInfo } from '@/fetch/api'
import Router from 'next/router'
import { Cache, CacheType } from '@/utils/Cache'
import { SITE_TOKEN, USER_INFO } from '@/constants/token'
import { useDispatch } from 'react-redux'
import { setToken, setUserInfo } from '@/store/features/user/userSlice'
interface IProps {
  children?: ReactNode
}
const SignUp: React.FC<IProps> = () => {
  const dispatch = useDispatch()
  const usernameProps = useFormInput<string>('')
  const passwordProps = useFormInput<string>('')
  const loginhandler = async () => {
    const localCache = new Cache(CacheType.Local)
    const res = await login(usernameProps.value, passwordProps.value)
    const userInfo = await getUserInfo(res.token)
    dispatch(setToken(res.token))
    dispatch(setUserInfo(userInfo))
    localCache.setCatch(SITE_TOKEN, res.token)
    localCache.setCatch(USER_INFO, userInfo)
    Router.push({ pathname: '/article/1' })
  }
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-blue-600 sm:text-3xl">Hi cslink</h1>

          <form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Sign in to your account</p>

            <div>
              <div className="relative">
                <input
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email or username"
                  {...usernameProps}
                />

                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <Icon icon="mdi:user" />
                </span>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...passwordProps}
                />

                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <Icon icon="mdi:password" />
                </span>
              </div>
            </div>

            <div
              onClick={loginhandler}
              className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white">
              Sign in
            </div>

            <p className="text-center text-sm text-gray-500">
              No account?
              <a className="underline" href="/">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignUp
