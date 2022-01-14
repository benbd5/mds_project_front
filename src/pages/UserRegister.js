import { useNavigate } from 'react-router-dom'
import Register from '../components/Auth/Register'
import { useAuth } from '../contexts/AuthContext'
import { register } from '../services/api'

export default function UserRegister () {
  const { state: { error } } = useAuth()

  const navigate = useNavigate()

  // Soumission du formulaire
  // infos car on reçoit l'objet avec email, password, etc depuis Register.js
  const handleSubmit = async (infos) => {
    await register(infos)
    await navigate('/profile')
  }

  return (
    <Register
      submit={handleSubmit}
      error={error}
    />
  )
}
