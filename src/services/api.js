import axios from 'axios'

const backendNode = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

const getTest = async () => {
  try {
    const response = await backendNode.get('/test')
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getTest
}
