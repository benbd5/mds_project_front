import { useContext } from 'react'
import Profile from '../components/Auth/Profile'
import { useAuth } from '../contexts/AuthContext'
import { getProfile } from '../services/api'

export default function UserProfile() {
  console.log('window.localStorage', window.localStorage.getItem('token'))
  getProfile()
  const context = useAuth()
  console.log('context', context.state.token)
  console.log(context)
  return (
    <div>
      <Profile />
    </div>
  )
}
