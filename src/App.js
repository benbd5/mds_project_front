import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import CreateSession from './pages/CreateSession'
import Session from './pages/Session'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sessions' element={<Session />} />
        <Route path='/create-sessions' element={<CreateSession />} />
      </Routes>
    </div>
  )
}

export default App
