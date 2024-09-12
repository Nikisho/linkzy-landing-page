import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-3'>
      <Header/>
      <Home /> 
    </div>
  )
}

export default App
