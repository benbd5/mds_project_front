import Profile from '../components/Auth/Profile'
import { actionTypes, useAuth } from '../contexts/AuthContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getProfile } from '../services/api'
import { useEffect, useState } from 'react'

export default function UserProfile () {
  const { dispatch, state: { user } } = useAuth()
  const navigate = useNavigate()

  const [profileInfos, setProfileInfos] = useState([])

  const location = useLocation()

  const getData = async () => {
    const profileInfos = await getProfile()
    setProfileInfos(profileInfos)
  }

  useEffect(() => {
    getData()
  }, [])

  const logout = async () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
    await navigate('/sessions')
  }

  if (user) {
    return (
      <div>
        <Profile userProfile={profileInfos} logout={logout} />
      </div>
    )
  }
  return <Navigate to='/auth/login' state={{ from: location }} replace />
}
