import React, { useEffect, useState } from 'react'
import { getSportValues } from '../../services/api'

export default function SelectInput (props) {
  const [sportValues, setSportValues] = useState([])

  // sportValues
  const getDataSport = async () => {
    const sportValues = await getSportValues()
    setSportValues(sportValues)
  }

  useEffect(() => {
    getDataSport()
  }, [])

  const sportList = sportValues.length > 0 && sportValues.map((item, i) => {
    return (
      <option key={sportValues[i]} value={item}>{item}</option>
    )
  })

  return (
    <div className='m-3'>
      {/* On récupère les 'props'+props pour alimenter le onChange et modifier la valeur en fonction de l'état (du choix de l'utilisateur) */}
      <select className='form-select' {...props} onChange={props.onChange}>
        {sportList}
      </select>
    </div>
  )
}
