import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

const getSessions = async () => {
  try {
    const response = await api.get('/sessions')
    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}

const getSportValues = async () => {
  try {
    const response = await api.get('/sport-values')
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

const getOneSession = async (sessionId) => {
  try {
    const response = await api.get(`/session/${sessionId}`)
    return (response.data)
  } catch (error) {
    console.error(error)
  }
}

const createSession = async (newSession) => {
  try {
    const response = await api.post('/add', newSession)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const patchSession = async (editSession) => {
  try {
    // On renvoit l'objet session identique à celui attendu dans node.js
    const response = await api.patch(`/edit_session/${editSession._id}`, { session: editSession })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getSessions,
  getSportValues,
  getOneSession,
  createSession,
  patchSession
}
