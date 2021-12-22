import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/sessions'>Sessions</Link>
      </nav>
    </div>
  )
}
