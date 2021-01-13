import './Content.css'
import React from 'react'

import { Switch, Route } from 'react-router-dom'

//Pages
import Home from '../../views/Home/Home'
import About from '../../views/About/About'
import Portfolio from '../../views/Portfolio/Portfolio'
import Contact from '../../views/Contact/Contact'


const Content = props => {

    const sidebarMini = props.sidebarMini
    const noturneTheme = props.noturneTheme

    return (
        <main className={ `content ${ sidebarMini? 'content--mini' : '' } ${ noturneTheme? 'content--noturne' : '' }` } >
            <Switch>
                <Route path="/contato">
                    <Contact></Contact>
                </Route>
                <Route path="/portfolio">
                    <Portfolio></Portfolio>
                </Route>
                <Route path="/sobre">
                    <About noturneTheme={ noturneTheme } ></About>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </main>
    )
}

export default Content