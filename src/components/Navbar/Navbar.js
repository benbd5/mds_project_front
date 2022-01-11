import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/auth/register'>Inscription</Link>
        <Link to='/auth/login'>Connexion</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/sessions'>Sessions</Link>
        <Link to='/create-sessions'>Créer une session</Link>
      </nav>
    </div>
  )
}
