import { createContext, useEffect, useContext, useReducer } from 'react'
import { login } from '../services/api'

/**
 * Création du context, lorsque l'on s'abonnera à cet objet, il lira la valeur actuelle du contexte depuis
 * le Provider le plus proche situé dans le haut de l'arborescence
 */
const AuthContext = createContext(null)

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ERROR: 'ERROR'
}

// Etat inital des valeurs
const initalState = JSON.parse(window.localStorage.getItem('AUTH')) || {
  token: null,
  user: null,
  error: null,
  loading: false
}

// useReducer est une alternative à useState et permet de renvoyer l’état local actuel accompagné d’une méthode dispatch
const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...initalState, token: action.data.token, user: action.data.user
      }
    case actionTypes.ERROR:
      return {
        ...initalState, error: action.data.error
      }
    case actionTypes.LOGOUT:
      // On vide le localstorage et retourne l'état initial = null
      window.localStorage.removeItem('AUTH')
      return initalState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

// Cela permet aux composants consommateurs, donc à placer au dessus des enfants (children), de s’abonner aux mises à jour du contexte
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initalState)

  useEffect(() => {
    // Le localStorage ne prend pas en charge les objets, on convertit donc notre objet en string
    window.localStorage.setItem('AUTH', JSON.stringify(state))
  }, [state])

  // prop value à transmettre aux composants consommateurs descendants de ce Provider
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  // renvoie la valeur actuelle du contexte d'authentification
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

const loginUser = async (credentials, dispatch) => {
  try {
    const data = await login(credentials)
    console.log('data', data)
    dispatch({
      type: actionTypes.LOGIN,
      data: {
        user: data.user,
        token: data.token
      }
    })
  } catch (error) {
    console.log('error', error)
    dispatch({
      type: actionTypes.ERROR,
      data: {
        error: error.message
      }
    })
  }
}

export {
  useAuth,
  AuthProvider,
  actionTypes,
  loginUser
}
