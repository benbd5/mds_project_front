import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SessionInfos from '../components/Sessions/SessionInfos'
import { getOneSession } from '../services/api'

export default function InfosSession () {
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

  return (
    <div>
      <SessionInfos oneSession={oneSession} />
    </div>
  )
}
