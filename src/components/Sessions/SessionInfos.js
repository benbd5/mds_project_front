const moment = require('moment')

export default function SessionInfos ({ oneSession, isMember }) {
  console.log(oneSession)

  if (oneSession[0] && oneSession[1]) {
    // Pour éviter d'afficher un nombre de participants inexact si des id d'utilisateur sont en double dans les participants
    const uniqueMember = oneSession[0].members.filter(function (value, index, array) {
      return array.indexOf(value) === index
    })

    return (
      <div className='container'>
        <div className='row'>
          <h3 className='text-center'>{oneSession[0].sport}</h3>
          <p>{oneSession[0].description}</p>
          <p>Lieu : {oneSession[0].place}</p>
          <p>Date : {moment(oneSession[0].date).format('DD/MM/YYYY')}</p>

          <div className='row'>
            <h3 className='text-center'>Les participants</h3>
            <p>{uniqueMember.length > 0 ? uniqueMember.length + ' particants' : 'Aucun participant'}</p>
            {
              oneSession[1].map(item => {
                return (
                  <div key={item._id}>
                    <p>{item.firstname}</p>
                  </div>
                )
              }
              )
            }
          </div>
          <button onClick={isMember} className='btn btn-primary'>Rejoindre</button>
          <hr />
        </div>
      </div>
    )
  } else {
    return <p>Données en cous de chargement...</p>
  }
}
