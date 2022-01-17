import { Link, useNavigate } from 'react-router-dom'
import { deleteSession } from '../../services/api'

const moment = require('moment')

export default function Profile ({ logout, userProfile, handleSubmit, handleFileChange, image, status }) {
  const navigate = useNavigate()

  /**
   * 3 tableaux :
   *  - [0] = données concernant l'utilisateur
   *  - [1] = données concernant les sessions qu'il a créé
   *  - [2] = données concernant l'utilisateur
  */
  if (userProfile[0] && userProfile[1] && userProfile[2]) {
    const sessionsOfUser = userProfile[1].map((item) => {
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
          <p>Les participants : {item.members.lenght > 0 ? item.members.lenght + ' particants' : 'Aucun participant'}</p>
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

    const participationOfSessionForUser = userProfile[2].map((item) => {
      return (
        <div key={item._id}>
          <Link to={`/session/${item._id}`}>
            <p>Sport : {item.sport}</p>
            <p>Description : {item.description}</p>
            <p>Lieu : {item.place}</p>
            <p>Date : {moment(item.date).format('DD/MM/YYYY')}</p>
          </Link>
          <hr />
        </div>
      )
    })

    return (
      <div>
        <h2>Vous êtes connecté</h2>
        <button onClick={logout} className='btn btn-primary'>Se déconnecter</button>

        <div className='profilPicture'>
          <h3>Upload to server</h3>
          {image.preview && <img src={image.preview} width='100' height='100' />}
          <hr />
          <form onSubmit={handleSubmit}>
            <input type='file' name='file' onChange={handleFileChange} />
            <button type='submit'>Submit</button>
          </form>
          {status && <h4>{status}</h4>}
        </div>

        <div>
          <h3>Informations concernant votre profile</h3>
          <p>Prénom : {userProfile[0].firstname}</p>
          <p>Nom : {userProfile[0].lastname}</p>
          <p>Email : {userProfile[0].email}</p>
          <p>Téléphone : {userProfile[0].phone}</p>
        </div>
        <div>
          <h3>Vos sessions</h3>
          {sessionsOfUser}
        </div>
        <div>
          <h3>Les sessions auxquelles vous participez</h3>
          {participationOfSessionForUser}
        </div>
      </div>
    )
  } else {
    return <p>Données en cous de chargement...</p>
  }
}
