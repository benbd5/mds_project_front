import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SessionEdit from '../components/Sessions/SessionEdit'
import { getOneSession } from '../services/api'

export default function EditSession () {
  const [oneSession, setOneSession] = useState([])
  const { id } = useParams()

  const getData = async () => {
    // Utiliser une promesse pour renvoyer la valeur 0 du tableau correspondant aux données de la session
    const oneSession = await getOneSession(id).then(res => (res[0]))
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
