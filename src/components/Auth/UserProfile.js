import React from 'react'

export default function Profile (logout, profil) {
  return (
    <div>
      <h2>Vous êtes connecté</h2>
      <p>{profil && JSON.stringify(profil)}</p>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  )
}
