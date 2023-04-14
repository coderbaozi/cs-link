import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'normalize.css/normalize.css'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '@/store/'
import { setToken, setUserInfo } from '@/store/features/user/userSlice'
import { SITE_TOKEN, USER_INFO } from '@/constants/token'
import { CacheType } from '@/utils/Cache'
import { Cache } from '@/utils/Cache'
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const localCache = new Cache(CacheType.Local)
    store.dispatch(setToken(localCache.getCatch(SITE_TOKEN) ?? ''))
    store.dispatch(setUserInfo(localCache.getCatch(USER_INFO) ?? {}))
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.getInitialProps = async () => {
  return {}
}
