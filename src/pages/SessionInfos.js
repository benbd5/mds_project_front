import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SessionInfos from '../components/Sessions/SessionInfos'
import { getOneSession, memberOfSession } from '../services/api'

export default function InfosSession() {
  const [oneSession, setOneSession] = useState([])
  const { id } = useParams()
  // UseEffect => https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  useEffect(() => {
    const getData = async () => {
      const oneSession = await getOneSession(id)
      setOneSession(oneSession)
    }

    getData(id)
  }, [])

  const isMember = async () => {
    await memberOfSession(id)
  }

  return (
    <div>
      <SessionInfos oneSession={oneSession} isMember={isMember} />
    </div>
  )
}
