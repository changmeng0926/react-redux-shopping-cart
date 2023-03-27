import axios from 'axios'

const http = axios.create({
  baseURL: 'https://mock.mengxuegu.com/mock/6419a078e24b4b4cfeac99e8/shopping-cart',
  timeout: 10000,
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
