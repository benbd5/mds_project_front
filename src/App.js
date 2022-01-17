import {
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SessionInfos from './pages/SessionInfos'
import CreateSession from './pages/CreateSession'
import EditSession from './pages/EditSession'
import Sessions from './pages/Sessions'
import { AuthProvider } from './contexts/AuthContext'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Sessions />} />
          <Route path='/auth/register' element={<UserRegister />} />
          <Route path='/auth/login' element={<UserLogin />} />
          <Route path='/profile' element={<UserProfile />} />
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
