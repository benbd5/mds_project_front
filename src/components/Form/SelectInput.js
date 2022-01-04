import React, { useEffect, useState } from 'react'
import { getSessions } from '../../services/api'

export default function SelectInput (props) {
  const [sessions, setSessions] = useState([])

  const getData = async () => {
    const sessions = await getSessions()
    setSessions(sessions)
  }

  useEffect(() => {
    getData()
  }, [])

  // Initialisation d'un tableau vide pour y ajouter les sports et pouvoir s'en servir dans le .map pour le select option
  const sportSelection = []

  for (let i = 0; i < sessions.length; i++) {
    const sports = sessions[i]
    sportSelection.push(sports)
  }

  const sportList = sportSelection.length > 0 && sportSelection.map((item, i) => {
    // console.log(sportSelection[i]._id) // Permet de retourner l'id de chaque objet
    return (
      <option key={sportSelection[i]._id} value={item.sport}>{item.sport}</option>
    )
  })

  return (
    <div className='m-3'>
      <select className='form-select'>
        {sportList}
      </select>
    </div>
  )
}
