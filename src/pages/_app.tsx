import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'normalize.css/normalize.css'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from '@/store/'
import { setToken, setUserInfo } from '@/store/features/user/userSlice'
import { SITE_TOKEN, USER_INFO } from '@/constants/token'
import { CacheType } from '@/utils/Cache'
import { Cache } from '@/utils/Cache'
import { setTags } from '@/store/features/nav/navSlice'
export default function App({ Component, pageProps }: AppProps) {
  const [persistence, setPersistence] = useState(false)
  useEffect(() => {
    setPersistence(true)
    const localCache = new Cache(CacheType.Local)
    const sessionCache = new Cache(CacheType.Session)
    store.dispatch(setTags(sessionCache.getCatch('tags')) ?? '')
    store.dispatch(setToken(localCache.getCatch(SITE_TOKEN) ?? ''))
    store.dispatch(setUserInfo(localCache.getCatch(USER_INFO) ?? {}))
  }, [persistence, setPersistence])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.getInitialProps = async () => {
  return {}
}
