import { useState } from 'react'
import './App.css'
import Menu  from './Componentes/Shared/Menu/Menu'
import { BrowserRouter,Routes,Route } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
