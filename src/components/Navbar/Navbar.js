import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function Navbar () {
  const { state: { user } } = useAuth()

  // Vérifier si l'utilisateur est authentifié
  if (user) {
    return (
      <div>
        <nav>
          <Link to='/'>Accueil</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/sessions'>Sessions</Link>
          <Link to='/create-sessions'>Créer une session</Link>
        </nav>
      </div>
    )
  }

  return (
    <div>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/auth/register'>Inscription</Link>
        <Link to='/auth/login'>Connexion</Link>
        <Link to='/sessions'>Sessions</Link>
        <Link to='/create-sessions'>Créer une session</Link>
      </nav>
    </div>
  )
}
