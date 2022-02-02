import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import SessionCreate from '../components/Sessions/SessionCreate'
import { useAuth } from '../contexts/AuthContext'

export default function CreateSession () {
  // On récupère l'id de l'utilisateur connecté pour le lier à la sessions qu'il créé
  const { state: { user } } = useAuth()

  const location = useLocation()

  const [session, setSession] = useState({
    sport: 'Surf',
    description: '',
    place: '',
    date: '',
    userId: user ? user._id : '' //  Permet de ne pas charger le user id si l'utilisateur n'est pas connecté et souhaite accéeder à la page de création de sessions
  })

  if (user) {
    return (
      <div>
        <SessionCreate data={session} onChange={setSession} />
      </div>
    )
  }
  return <Navigate to='/auth/login' state={{ from: location }} replace />
}
