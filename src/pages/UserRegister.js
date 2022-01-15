import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Register from '../components/Auth/Register'
import { useAuth, registerUser } from '../contexts/AuthContext'
import UserProfile from './UserProfile'
// import { register } from '../services/api'

export default function UserRegister () {
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
  // infos car on reçoit l'objet avec email, password, etc depuis Register.js
  const handleSubmit = async (infos) => {
    await registerUser(infos, dispatch)
    await navigate('/profile')
  }

  return (
    <div>
      {
        isLoggedIn
          ? <UserProfile userProfile={user} />
          : <Register
              submit={handleSubmit}
              error={error}
            />
      }
    </div>
  )
}
