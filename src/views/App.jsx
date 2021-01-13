import React, { useState } from 'react'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'

const App = () => {

  localStorage.setItem('sidebarMini', localStorage.sidebarMini === undefined? false : localStorage.sidebarMini )
  localStorage.setItem('noturneTheme', localStorage.noturneTheme === undefined? false : localStorage.noturneTheme )
  
  const [sidebarMini, setSidebarMini] = useState( JSON.parse(localStorage.sidebarMini) )

  const sidebarWidthController = () => {
    localStorage.setItem('sidebarMini', sidebarMini? false : true )
    setSidebarMini( JSON.parse(localStorage.sidebarMini) )
  }

  const [noturneTheme, setNoturneTheme] = useState( JSON.parse(localStorage.noturneTheme))

  const changeTheme = () => {
    localStorage.setItem('noturneTheme', noturneTheme? false : true )
    setNoturneTheme( JSON.parse(localStorage.noturneTheme) )
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