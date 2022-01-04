import React, { useState } from 'react'
import SessionCreate from '../components/Sessions/SessionCreate'

export default function CreateSession () {
  const [session, setSession] = useState({
    sport: '',
    description: '',
    place: '',
    date: ''
  })

  return (
    <div>
      <SessionCreate data={session} onChange={setSession} />
    </div>
  )
}
