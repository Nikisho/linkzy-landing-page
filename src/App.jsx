import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Element } from 'react-scroll'
import SecondScroll from './pages/SecondScroll'
import ThirdScroll from './pages/ThirdScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header />
      <Element name='home'>
        <Home />
      </Element>
      <Element name='secondscroll'>
        <SecondScroll />
      </Element>
      <Element name='thirdscroll'>
        <ThirdScroll />
      </Element>
      
    </div>
  )
}

export default App
