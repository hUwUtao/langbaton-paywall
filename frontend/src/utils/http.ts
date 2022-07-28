import axios from 'axios'
import { temporaryHash, kvEncrypt } from './hash'

const isDevelopment = process.env.NODE_ENV === 'development'

const http = axios.create({
  baseURL: isDevelopment ? 'http://localhost:3000/api' : '/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  },
})

function securePost(route: string, data: string) {
  const tempkey = temporaryHash(10000)
  return http.post(
    route,
    JSON.stringify({
      data: kvEncrypt(tempkey, data),
    })
  )
}

export default http
export { securePost }
