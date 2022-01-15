import Profile from '../components/Auth/Profile'
import { actionTypes, useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function UserProfile () {
  const { dispatch, state: { user } } = useAuth()
  const navigate = useNavigate()

  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
    navigate('/auth/login')
  }

  return (
    <div>
      <Profile userProfile={user} logout={logout} />
    </div>
  )
}
