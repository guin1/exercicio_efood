import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './pages/home'
import Perfil from './pages/perfil'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalCss />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
