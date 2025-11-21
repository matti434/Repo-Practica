import { useState } from 'react'
import './App.css'
import Menu from './Componentes/Shared/Menu/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Componentes/Views/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App