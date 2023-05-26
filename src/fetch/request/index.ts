import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { powerRequestConfig } from './type'
class Fetcher {
  instance: AxiosInstance

  // create an axios instance
  constructor(config: powerRequestConfig) {
    this.instance = axios.create(config)
    // add global interceptors for every axios instance
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      },
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data.data
      },
      (err) => {
        return Promise.reject(err)
      },
    )

    // add unique interceptors for every axios instance
    this.instance.interceptors.request.use(config.interceptors?.requestSuccessFn, config.interceptors?.requestFilureFn)
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFilureFn,
    )
  }

  // fetch data method wrapper
  // special feature it can add interceptors for everyone fetch data
  request<T = any>(config: powerRequestConfig<T>) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // execute single interceptors function
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          // @ts-expect-error let me see see
          res.name === 'AxiosError'? reject(res) : resolve(res)
        })
    })
  }

  get<T = any>(config: powerRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: powerRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: powerRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: powerRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Fetcher
