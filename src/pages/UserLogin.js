import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Auth/Login'
import Profile from '../components/Auth/Profile'
import { actionTypes, loginUser, useAuth } from '../contexts/AuthContext'

export default function UserLogin () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const { dispatch, state: { error, user } } = useAuth()

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  const navigate = useNavigate()

  // Soumission du formulaire
  // infos car on reçoit l'objet avec email, password, etc depuis LoginForm.js
  const handleSubmit = async (infos) => {
    await loginUser(infos, dispatch)
    await navigate('/profile')
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
          : <Login
              submit={handleSubmit}
              error={error}
            />
      }
    </div>
  )
}
