import axios from 'axios'
import useSessionStorage from '../hooks/useSessionStorage'

axios.defaults.baseURL = 'http://13.209.30.200:5003'

export const RequestApi = async (url, method, data) => {
  return await axios({
    url,
    method,
    data,
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))
}

<<<<<<< HEAD
export const Authorization = (url, method, data) => {
  // useSessionStorage 머지 후 변경 예정
  const tokenId = useSessionStorage('tokenId')
  return axios({
    url: `${API_END_POINT}${url}`,
=======
export const Authorization = async (url, method, data) => {
  const { tokenId } = JSON.parse(sessionStorage.getItem('authUser'))
  return await axios({
    url,
>>>>>>> feat/#95/comment
    method,
    headers: { Authorization: `Bearer ${tokenId}` },
    data: data,
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))
}

export default { RequestApi, Authorization }
