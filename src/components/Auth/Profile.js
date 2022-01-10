import React from 'react'

export default function Profile (logout) {
  return (
    <div>
      <h2>Vous êtes connecté</h2>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  )
}
