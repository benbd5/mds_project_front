import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SessionEdit from '../components/Sessions/SessionEdit'
import { getOneSession } from '../services/api'

export default function EditSession () {
  const [oneSession, setOneSession] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const oneSession = await getOneSession(id)
      setOneSession(oneSession)
    }
    getData()
  }, [])
  console.log('edit', oneSession[0])
  return (
    <div>
      <SessionEdit data={oneSession[0]} onChange={setOneSession} />
    </div>
  )
}
