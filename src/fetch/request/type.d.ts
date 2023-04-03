import type { AxiosRequestConfig, AxiosResponse } from 'axios'
/* AxiosRequestConfig type */
export interface powerInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFilureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFilureFn?: (err: any) => any
}

export interface powerRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: powerInterceptors<T>
}
