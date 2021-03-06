import useAsyncFn from '../hooks/useAsyncFn'
import axios from 'axios'

const BASE_URL = 'http://13.209.30.200:5003'

axios.defaults.baseURL = BASE_URL

const useAxios = (url, initialOptions = {}) =>
  useAsyncFn((options = {}) =>
    axios({
      url: options.url || url,
      ...initialOptions,
      ...options,
    }).then((res) => res.data),
  )

export default useAxios
