import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import SessionInfos from './pages/SessionInfos'
import CreateSession from './pages/CreateSession'
import Sessions from './pages/Sessions'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sessions' element={<Sessions />} />
        <Route path='/session/:id' element={<SessionInfos />} />
        <Route path='/create-sessions' element={<CreateSession />} />
      </Routes>
    </div>
  )
}

export default App
