import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'https://ivanaalawi-backend.onrender.com'

const client = axios.create({ baseURL: API_BASE + '/api' })

client.interceptors.request.use(config => {
  const token = localStorage.getItem('admin_token')
  if (token) config.headers.Authorization = 'Bearer ' + token
  return config
})

export default client
