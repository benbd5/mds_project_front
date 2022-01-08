import React from 'react'
const moment = require('moment')

export default function SessionInfos ({ oneSession }) {
  return (
    <div>
      <p>{oneSession.sport}</p>
      <p>{oneSession.description}</p>
      <p>{oneSession.place}</p>
      <p>{moment(oneSession.date).format('DD/MM/YYYY')}</p>
      <hr />
    </div>
  )
}
