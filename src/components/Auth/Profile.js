import React from 'react'

export default function Profile ({ logout, userProfile }) {
  console.log('userProfile', userProfile)
  return (
    <div>
      <h2>Vous êtes connecté</h2>
      <button onClick={logout}>Se déconnecter</button>
      <p>{userProfile && JSON.stringify(userProfile)}</p>
    </div>
  )
}
