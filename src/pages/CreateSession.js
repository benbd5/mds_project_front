import React, { useState } from 'react'
import SessionCreate from '../components/Sessions/SessionCreate'
import { useAuth } from '../contexts/AuthContext'

export default function CreateSession () {
  // On récupère l'id de l'utilisateur connecté pour le lier à la sessions qu'il créé
  const { state: { user } } = useAuth()

  const [session, setSession] = useState({
    sport: '',
    description: '',
    place: '',
    date: '',
    userId: user._id
  })

  return (
    <div>
      <SessionCreate data={session} onChange={setSession} />
    </div>
  )
}
