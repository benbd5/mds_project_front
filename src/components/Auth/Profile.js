import { Link } from 'react-router-dom'
import { deleteSession } from '../../services/api'

const moment = require('moment')

export default function Profile ({ logout, userProfile, handleSubmit, handleFileChange, image, status }) {
  /**
   * 3 tableaux :
   *  - [0] = données concernant l'utilisateur
   *  - [1] = données concernant les sessions qu'il a créé
   *  - [2] = données concernant l'utilisateur
  */
  if (userProfile[0] && userProfile[1] && userProfile[2]) {
    // Affiche les sessions que l'utilisateur a créé
    const sessionsOfUser = userProfile[1].map((item) => {
      // Fonction de suppression des éléments
      const handleDelete = async () => {
        if (window.confirm('Voulez-vous vraiment supprimer ?')) {
          await deleteSession(item._id)
          await window.location.reload()
        }
      }
      return (
        <div key={item._id}>
          <Link to={`/session/${item._id}`}>
            <p>{item.sport}</p>
          </Link>
          <p>Description : {item.description}</p>
          <p>Lieu : {item.place}</p>
          <p>Date : {item.date}</p>
          <p>Les participants : {item.members.length > 0 ? item.members.length + ' participants' : 'Aucun participant'}</p>
          <Link to={`/edit-session/${item._id}`}>
            <button className='btn btn-warning' type='submit'>
              Modifier
            </button>
          </Link>
          <button className='btn btn-danger' onClick={handleDelete}>
            Supprimer
          </button>
          <hr />
        </div>
      )
    })

    // Affiche les participations de l'utilisateur à une session
    const participationOfSessionForUser = userProfile[2].map((item) => {
      return (
        <div key={item._id}>
          <Link to={`/session/${item._id}`}>
            <p>{item.sport}</p>
          </Link>
          <p>Description : {item.description}</p>
          <p>Lieu : {item.place}</p>
          <p>Date : {moment(item.date).format('DD/MM/YYYY')}</p>
          <hr />
        </div>
      )
    })

    // Affiche les input pour ajouter une image
    const displayFormToSendImage = (
      <div className='profilPicture'>
        {image.preview && <img src={image.preview} width='100' height='100' />}
        <hr />
        <form onSubmit={handleSubmit}>
          <input type='file' name='file' onChange={handleFileChange} />
          <button type='submit' className='btn btn-info'>
            {userProfile[0].pictureProfile ? 'Modifier votre photo de profile' : 'Envoyer'}
          </button>
        </form>
        {status && <h4>{status}</h4>}
      </div>
    )

    // La photo de profile de l'utilisateur
    const pictureProfileExist = <img src={'http://localhost:4000/' + userProfile[0].pictureProfile} width='100' height='100' />

    return (
      <div className='container'>
        <h2 className='text-center'>Mon profile</h2>
        <button href='/sessions' onClick={logout} className='btn btn-primary'>Se déconnecter</button>
        <br />

        {pictureProfileExist}
        {displayFormToSendImage}

        <br />

        <div>
          <h3>Mes informations</h3>
          <p>Prénom : {userProfile[0].firstname}</p>
          <p>Nom : {userProfile[0].lastname}</p>
          <p>Email : {userProfile[0].email}</p>
          <p>Téléphone : {userProfile[0].phone}</p>
        </div>
        <div>
          <h3>Mes sessions créées</h3>
          {sessionsOfUser.length ? sessionsOfUser : "Je n'ai pas encore créé de session"}
        </div>
        <br />
        <div>
          <h3>Les sessions auxquelles je participe</h3>
          {participationOfSessionForUser}
        </div>
      </div>
    )
  } else {
    return <p>Données en cours de chargement...</p>
  }
}
