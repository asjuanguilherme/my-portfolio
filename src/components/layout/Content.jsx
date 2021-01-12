import './Content.css'
import React from 'react'

import { Switch, Route } from 'react-router-dom'

//Pages
import Home from '../../views/Home/Home'
import About from '../../views/About/About'
import Portfolio from '../../views/Portfolio/Portfolio'
import Contact from '../../views/Contact/Contact'

const Content = props => {
    return (
        <main className="content">
            <Switch>
                <Route path="/sobre">
                    <About/>
                </Route>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route path="/contato">
                    <Contact/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </main>
    )
}

export default Content