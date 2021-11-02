import axios from 'axios'

axios.defaults.baseURL = 'https://learn.programmers.co.kr:5003'

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
  const tokenId = JSON.parse(sessionStorage.getItem('tokenId'))
  return await axios({
    url,
    method,
    headers: { Authorization: `Bearer ${tokenId}` },
    data: data,
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))
}

export default { RequestApi, Authorization }
