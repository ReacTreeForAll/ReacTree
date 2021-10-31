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
  const { tokenId } = JSON.parse(sessionStorage.getItem('authUser'))
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
