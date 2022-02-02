import { Link } from 'react-router-dom'

const moment = require('moment')

export default function SessionsList ({ session }) {
  /* Retourne la liste des sessions avec le lien pour accéder à une session en particulier avec son id */
  return (
    <div className='container'>
      {
        session.map(item => {
          return (
            <div key={item._id} className='row align-items-center gx-5'>
              <div className='col-3 '>
                <img src={`/images/${item.sport}.png`} alt={item.sport} width='60' height='60' className='align-center' />
              </div>
              <div className='col-9'>
                <Link to={`/session/${item._id}`}>
                  <h3>{item.sport}</h3>
                </Link>
                <p>{item.description}</p>
                <p>Lieu : {item.place}</p>
                <p>Date : {moment(item.date).format('DD/MM/YYYY')}</p>
                <hr />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
