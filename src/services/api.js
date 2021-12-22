import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

const getSessions = async () => {
  try {
    const response = await api.get('/sessions')
    console.log('response', response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getSessions
}
