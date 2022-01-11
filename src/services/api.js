import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

// Sessions
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

const deleteSession = async (id) => {
  try {
    const response = await api.delete('/delete_session', { data: { id } })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Authentification
// Credentials = paramètres d'auth (email, passwd)
const login = async (credentials) => {
  try {
    console.log('credentials', credentials)
    const response = await api.post('/auth/login', credentials)
    console.log('response', response)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

const register = async (RegisterInfos) => {
  try {
    console.log('RegisterInfos', RegisterInfos)
    const response = await api.post('/auth/register', RegisterInfos)
    console.log('response', response)
    // Sauvegarde du token dans le localStorage
    if (response.data && response.data.token) {
      window.localStorage.setItem('token', response.data.token)
    }
    return {
      error: null,
      data: response.data
    }
  } catch (error) {
    console.error(error)
    return {
      error: error,
      data: null
    }
  }
}

const getProfile = async () => {
  try {
    const token = window.localStorage.getItem('token')
    if (token) {
      const response = await api.get('/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export {
  getSessions,
  getSportValues,
  getOneSession,
  createSession,
  patchSession,
  deleteSession,
  register,
  login,
  getProfile
}
