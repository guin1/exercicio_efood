import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/home'
import { GlobalCss } from './styles'
import Perfil from './pages/perfil'

function App() {
  return (
    <Router>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  )
}

export default App
