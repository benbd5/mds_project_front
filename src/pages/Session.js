import { useEffect, useState } from 'react'
import SessionsList from '../components/Sessions/SessionsList'
import { getSessions } from '../services/api'

export default function Session() {
  const [sessions, setSessions] = useState([])

  const getData = async () => {
    const sessions = await getSessions()
    setSessions(sessions)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <SessionsList session={sessions} />
    </div>
  )
}
