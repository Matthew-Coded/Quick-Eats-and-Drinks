import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/categories' element={<Categories />} /> */}
        {/* <Route path='/watch-list' element={<WatchList />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
