import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SessionEdit from '../components/Sessions/SessionEdit'
import { getOneSession } from '../services/api'

export default function EditSession () {
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
      <SessionEdit data={oneSession} onChange={setOneSession} />
    </div>
  )
}
