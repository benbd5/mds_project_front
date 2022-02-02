import Profile from '../components/Auth/Profile'
import { actionTypes, useAuth } from '../contexts/AuthContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { addProfilePicture, getProfile } from '../services/api'
import { useEffect, useState } from 'react'

export default function UserProfile () {
  const { dispatch, state: { user } } = useAuth()

  const [profileInfos, setProfileInfos] = useState([])
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')

  const navigate = useNavigate()

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', image.data)
    const response = await addProfilePicture(formData)
    if (response) setStatus(response.statusText)
    window.location.reload()
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }
    setImage(img)
  }

  if (user) {
    return (
      <div>
        <Profile
          userProfile={profileInfos}
          logout={logout}
          handleSubmit={handleSubmit}
          handleFileChange={handleFileChange}
          status={status}
          image={image}
        />
      </div>
    )
  }
  return <Navigate to='/auth/login' state={{ from: location }} replace />
}
