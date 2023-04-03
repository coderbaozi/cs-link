import Fetcher from './request/index'

// replace ajax lib may be causes a name conflict
const fetcher = new Fetcher({
  baseURL: 'http://localhost:12800',
  timeout: 3000,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFilureFn: (err: any) => {
      return err
    },
    responseSuccessFn: (res: any) => {
      return res
    },
    responseFilureFn: (err: any) => {
      return err
    },
  },
})

export default fetcher
