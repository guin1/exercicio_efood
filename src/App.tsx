import { GlobalCss } from './styles'

import Home from './pages/home'
function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Home />
      </div>
    </>
  )
}

export default App
