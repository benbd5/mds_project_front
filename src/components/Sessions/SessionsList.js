import { Link } from 'react-router-dom'

const moment = require('moment')

export default function SessionsList ({ session }) {
  /* Retourne la liste des sessions avec le lien pour accéder à une session en particulier avec son id */
  return (
    <div>
      {
        session.map(item => {
          return (
            <div key={item._id}>
              <Link to={`/session/${item._id}`}>
                <p>{item.sport}</p>
                <p>{item.description}</p>
                <p>{item.place}</p>
                <p>{moment(item.date).format('DD/MM/YYYY')}</p>
              </Link>
              <button className='btn btn-primary'>Rejoindre</button>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}
