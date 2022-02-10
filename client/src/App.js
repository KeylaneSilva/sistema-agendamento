import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Album from './pages/client/painel'
import Routes from './routes'

export default function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
      
    </div>
  )
}
