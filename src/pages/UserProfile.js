import Profile from '../components/Auth/Profile'
import { actionTypes, useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../services/api'
import { useEffect, useState } from 'react'

export default function UserProfile () {
  const { dispatch } = useAuth()
  const navigate = useNavigate()

  const [profileInfos, setProfileInfos] = useState([])

  const getData = async () => {
    const profileInfos = await getProfile()
    setProfileInfos(profileInfos)
  }

  useEffect(() => {
    getData()
  }, [])

  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
    navigate('/sessions')
  }

  return (
    <div>
      <Profile userProfile={profileInfos} logout={logout} />
    </div>
  )
}
