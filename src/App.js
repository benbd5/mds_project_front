import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import SessionInfos from './pages/SessionInfos'
import CreateSession from './pages/CreateSession'
import EditSession from './pages/EditSession'
import Sessions from './pages/Sessions'
import { AuthProvider } from './contexts/AuthContext'
import Auth from './pages/Auth'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Profile from './pages/Profile'

function App () {
  return (
    <div className='App'>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Auth />}>
            <Route path='/auth/register' element={<Register />} />
            <Route path='/auth/login' element={<Login />} />
          </Route>
          <Route path='/profile' element={<Profile />} />
          <Route path='/sessions' element={<Sessions />} />
          <Route path='/session/:id' element={<SessionInfos />} />
          <Route path='/create-sessions' element={<CreateSession />} />
          <Route path='/edit-session/:id' element={<EditSession />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
