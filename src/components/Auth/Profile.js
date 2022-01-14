import React from 'react'
import { getProfile } from '../../services/api'

export default function Profile ({ userProfile }) {
  console.log('profile', userProfile)
  getProfile()
  return (
    <div>
      <h2>Vous êtes connecté</h2>
      <p>{userProfile && JSON.stringify(userProfile)}</p>
    </div>
  )
}
