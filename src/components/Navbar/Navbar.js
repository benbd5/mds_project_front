import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function NavbarHeader () {
  const { state: { user } } = useAuth()

  // Vérifier si l'utilisateur est authentifié
  if (user) {
    return (
      <div>
        <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark' className='mb-3'>
          <Container>
            <Navbar.Brand href='/'><img src='/images/Surf.png' style={{ width: '40px', color: 'white' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Link className='navbar-brand' to='/'>Accueil</Link>
                <Link className='navbar-brand' to='/profile'>Profile</Link>
                <Link className='navbar-brand' to='/create-sessions'>Créer une session</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }

  return (
    <div>
      <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark' className='mb-3'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Link className='navbar-brand' to='/'>Accueil</Link>
              <Link className='navbar-brand' to='/auth/register'>Inscription</Link>
              <Link className='navbar-brand' to='/auth/login'>Connexion</Link>
              <Link className='navbar-brand' to='/create-sessions'>Créer une session</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
