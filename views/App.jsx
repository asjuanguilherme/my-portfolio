import React from 'react'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'

const App = () => {
  return(
    <Router>
      <Menu />
      <Content />
    </Router>
  )
}

export default App