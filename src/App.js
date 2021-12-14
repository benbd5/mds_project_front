import { useState, useEffect } from 'react'
import { getTest } from './services/api'

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const test = await getTest()
    console.log(test)
    setData(test)
    return test
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>{data.name}</div>
  )
}

export default App
