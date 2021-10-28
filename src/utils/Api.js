import axios from 'axios'

const API_END_POINT = 'http://13.209.30.200:5003'

export const RequestApi = (url, method, data) => {
  return axios({
    method,
    url: `${API_END_POINT}${url}`,
    data,
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))
}

export const Authorization = () => {
  // useSessionStorage 머지 후 변경 예정
  const tokenId = sessionStorage.getItem('tokenId')
  return axios({
    method: 'get',
    url: `${API_END_POINT}/auth-user`,
    headers: { Authorization: `Bearer ${tokenId}` },
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))
}

export default { RequestApi, Authorization }
