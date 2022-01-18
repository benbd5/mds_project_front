import { Link } from 'react-router-dom'

const moment = require('moment')

export default function SessionsList ({ session }) {
  /*   switch (session.sport) {
      case session.sport === 'bodyboard':
    <img src='/images/bodyboard.png' alt='bodyboard' />
        break
      case session.sport === 'Surf':
    <img src='/images/surfer.png' alt='surf' />
        break
      case session.sport === 'Kite-Surf':
    <img src='/images/kitesurfing(1).png' alt='Kite-Surf' />
        break
      case session.sport === 'Wing foil':
    <img src='/images/wingfoil.png' alt='Wing foil' />
        break
      default:
        break
    } */

  /* Retourne la liste des sessions avec le lien pour accéder à une session en particulier avec son id */
  return (
    <div className='container'>
      {
        session.map(item => {
          return (
            <div key={item._id} className='row'>
              <Link to={`/session/${item._id}`}>
                <h3>{item.sport}</h3>
              </Link>
              <p>{item.description}</p>
              <p>Lieu : {item.place}</p>
              <p>Date : {moment(item.date).format('DD/MM/YYYY')}</p>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}
