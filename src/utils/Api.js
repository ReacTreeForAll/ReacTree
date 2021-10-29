import axios from 'axios'

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

export const Authorization = async (url, method, data) => {
  const token = JSON.parse(sessionStorage.getItem('tokenId'))
  return await axios({
    url,
    method,
    headers: { Authorization: `Bearer ${token}` },
    data,
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))
}

export default { RequestApi, Authorization }
