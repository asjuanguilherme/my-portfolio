import React, { useState } from 'react'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'

const App = () => {

  const [sidebarMini, setSidebarMini] = useState(false)

  const sidebarWidthController = () => {
      sidebarMini? setSidebarMini(false) : setSidebarMini(true)
  }

  const [noturneTheme, setNoturneTheme] = useState(false)

  const changeTheme = () => {
    setNoturneTheme( noturneTheme? false : true )
  }

  return(
    <Router>
      <div className={ `app ${ noturneTheme? 'app--noturne' : '' }` } id="app">
        <Menu themeController={ changeTheme } noturneTheme={ noturneTheme } sidebarWidthController={ sidebarWidthController } sidebarMini={ sidebarMini } />
        <Content noturneTheme={ noturneTheme } sidebarMini={ sidebarMini } />
      </div>
    </Router>
  )
}

export default App