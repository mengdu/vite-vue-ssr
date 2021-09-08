import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.SSR
    ? 'http://localhost:3000'
    : '/'
})

export default instance
