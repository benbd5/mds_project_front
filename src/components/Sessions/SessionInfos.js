const moment = require('moment')

export default function SessionInfos({ oneSession, isMember }) {
  console.log(oneSession);

  if (oneSession[0] && oneSession.lenght > 0) {
    return (
      <div>
        <p>{oneSession[0].sport}</p>
        <p>{oneSession[0].description}</p>
        <p>{oneSession[0].place}</p>
        <p>{moment(oneSession[0].date).format('DD/MM/YYYY')}</p>
        <div>
          <h3>Les participants</h3>
          <p>{oneSession[0].lenght > 0 ? oneSession[0].members.lenght + ' particants' : 'Aucun participant'}</p>
        </div>
        <button onClick={isMember} className='btn btn-primary'>Rejoindre</button>
        <hr />
      </div>
    )
  } else {
    return <p>Données en cous de chargement...</p>
  }
}