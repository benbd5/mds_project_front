import { useState, useEffect } from 'react'
import Register from '../components/Auth/Register'
import Login from '../components/Auth/Login'
import Profile from '../components/Auth/Profile'

import { getProfile, register } from '../services/api'

import { actionTypes, loginUser, useAuth } from '../components/contexts/AuthContext'

export default function Auth () {
  // Initialisation des états locaux
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [profil, setProfil] = useState(null)

  const { dispatch, state: { error, user } } = useAuth()

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  // Soumission du formulaire
  // infos car on reçoit l'objet avec email, password, etc depuis Register/LoginForm.js
  const handleSubmit = async (infos) => {
    let data
    // Appel de la fonction d'API register
    if (isRegister) {
      data = await register(infos)
    } else {
      // Appel de la fonction d'API login
      await loginUser(infos, dispatch)
    }
  }

  const handleLoadProfile = async () => {
    const profile = await getProfile()
    setProfil(profile)
  }

  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }

  return (
    <div>
      {
        isLoggedIn
          ? <Profile logout={logout} />
          : (
            <div>
              {
                isRegister
                  ? <Register
                      submit={handleSubmit}
                      error={error}
                    />
                  : <Login
                      submit={handleSubmit}
                      error={error}
                    />
              }
              <a
                href='#'
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? "J'ai déjà un compte" : "Je n'ai pas de compte"}
              </a>
            </div>
            )
      }
      <button onClick={handleLoadProfile}>Load Profile</button>
      <p>{profil && JSON.stringify(profil)}</p>
    </div>
  )
}
