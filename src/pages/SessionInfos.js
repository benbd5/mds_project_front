import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SessionInfos from '../components/Sessions/SessionInfos'
import { getOneSession } from '../services/api'

export default function Sessions () {
  const [oneSession, setOneSession] = useState([])
  const { id } = useParams()

  const getData = async () => {
    const oneSession = await getOneSession(id)
    setOneSession(oneSession)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <SessionInfos oneSession={oneSession} />
      <Link to={`/edit-session/${id}`}>
        <button className='btn btn-primary' type='submit'>
          Modifier
        </button>
      </Link>
    </div>
  )
}
