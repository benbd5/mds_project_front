import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SessionInfos from '../components/Sessions/SessionInfos'
import { getOneSession, deleteSession } from '../services/api'

export default function InfosSession () {
  const [oneSession, setOneSession] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  // UseEffect => https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  useEffect(() => {
    const getData = async () => {
      const oneSession = await getOneSession(id)
      setOneSession(oneSession)
    }

    getData(id)
  }, [])

  const handleDelete = async () => {
    if (window.confirm('Voulez-vous vraiment supprimer ?')) {
      console.log('id infos', id)
      await deleteSession(id)
      navigate('/sessions')
    }
  }

  return (
    <div>
      <SessionInfos oneSession={oneSession} />
      <Link to={`/edit-session/${id}`}>
        <button className='btn btn-primary' type='submit'>
          Modifier
        </button>
      </Link>
      <button className='btn btn-primary' onClick={handleDelete}>
        Supprimer
      </button>
    </div>
  )
}
