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
                <Route path="/sobre" component={ About } />
                <Route path="/portfolio" component={ Portfolio } />
                <Route path="/contato" component={ Contact } />
                <Route path="/" component={ Home } />
            </Switch>
        </main>
    )
}

export default Content