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
    throw new Error(error.response.data)
  }
}

const getSportValues = async () => {
  try {
    const response = await api.get('/sport-values')
    return response.data
  } catch (error) {
    throw new Error(error.response.data)
  }
}

const getOneSession = async (sessionId) => {
  try {
    const response = await api.get(`/session/${sessionId}`)
    return (response.data)
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data)
  }
}

const createSession = async (newSession) => {
  try {
    const response = await api.post('/add', newSession)
    return response.data
  } catch (error) {
    console.error(error)

    throw new Error(error.response.data)
  }
}

const patchSession = async (editSession) => {
  try {
    // On renvoit l'objet session identique à celui attendu dans node.js
    const response = await api.patch(`/edit_session/${editSession._id}`, { session: editSession })
    return response.data
  } catch (error) {
    throw new Error(error.response.data)
  }
}

const deleteSession = async (id) => {
  try {
    const response = await api.delete('/delete_session', { data: { id } })
    return response.data
  } catch (error) {
    throw new Error(error.response.data)
  }
}

const memberOfSession = async (idSession, id) => {
  try {
    const token = window.localStorage.getItem('token')
    if (token) {
      const response = await api.patch(`/member/${idSession}`, { data: { id } }, {
        headers: {
          // Slice pour enlever les guillemets "" au début et à la fin de la valeur du token contenu dans le localStorage
          Authorization: `Bearer ${token.slice(1, -1)}`
        }
      })
      return response.data
    }
  } catch (error) {
    throw new Error(error.response.data)
  }
}

// Authentification
// Credentials = paramètres d'auth (email, passwd)
const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials)
    return response.data
  } catch (error) {
    throw new Error(error.response.data)
  }
}

const register = async (RegisterInfos) => {
  try {
    const response = await api.post('/auth/register', RegisterInfos)
    return response.data
  } catch (error) {
    throw new Error(error.response.data)
  }
}

const getProfile = async () => {
  try {
    const token = window.localStorage.getItem('token')
    if (token) {
      const response = await api.get('/profile', {
        headers: {
          // Slice pour enlever les guillemets "" au début et à la fin de la valeur du token contenu dans le localStorage
          Authorization: `Bearer ${token.slice(1, -1)}`
        }
      })
      return response.data
    }
  } catch (error) {
    throw new Error(error.response.data)
  }
}

export {
  getSessions,
  getSportValues,
  getOneSession,
  createSession,
  patchSession,
  deleteSession,
  memberOfSession,
  register,
  login,
  getProfile
}
