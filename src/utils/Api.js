import axios from 'axios'
import useSessionStorage from '../hooks/useSessionStorage'

const API_END_POINT = 'http://13.209.30.200:5003'

export const RequestApi = (url, method, data) => {
  return axios({
    url: `${API_END_POINT}${url}`,
    method,
    data,
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))
}

export const Authorization = (url, method, data) => {
  // useSessionStorage 머지 후 변경 예정
  const tokenId = useSessionStorage('tokenId')
  return axios({
    url: `${API_END_POINT}${url}`,
    method,
    headers: { Authorization: `Bearer ${tokenId}` },
    data,
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))
}

export default { RequestApi, Authorization }
