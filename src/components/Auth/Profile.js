import { Link, useNavigate } from 'react-router-dom'
import { deleteSession } from '../../services/api'

export default function Profile ({ logout, userProfile }) {
  const navigate = useNavigate()

  if (userProfile[0] && userProfile[1]) {
    const sessionsOfUser = userProfile[1].map((item, i) => {
      const handleDelete = async () => {
        if (window.confirm('Voulez-vous vraiment supprimer ?')) {
          await deleteSession(item._id)
          await navigate('/profile')
        }
      }
      return (
        <div key={item._id}>
          <p>Sport : {item.sport}</p>
          <p>Description : {item.description}</p>
          <p>Lieu : {item.place}</p>
          <p>Date : {item.date}</p>
          <Link to={`/edit-session/${item._id}`}>
            <button className='btn btn-primary' type='submit'>
              Modifier
            </button>
          </Link>
          <button className='btn btn-primary' onClick={handleDelete}>
            Supprimer
          </button>
          <hr />
        </div>
      )
    })

    return (
      <div>
        <h2>Vous êtes connecté</h2>
        <button onClick={logout} className='btn btn-primary'>Se déconnecter</button>
        <div>
          <h3>Informations concernant votre profile</h3>
          <p>Prénom : {userProfile[0].firstname}</p>
          <p>Nom : {userProfile[0].lastname}</p>
          <p>Email : {userProfile[0].email}</p>
          <p>Téléphone : {userProfile[0].phone}</p>
        </div>
        <div>
          <h3>Les sessions liées à votre profile</h3>
          {sessionsOfUser}
        </div>
      </div>
    )
  } else {
    return <p>Données en cous de chargement...</p>
  }
}
