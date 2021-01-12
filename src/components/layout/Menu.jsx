import './Menu.css'
import React from 'react'

import { NavLink } from 'react-router-dom'

import AuthorInf from './Menu/Author'

const Menu = props => {
    return (
        <aside className="menu">
            <AuthorInf/>
            <nav className="menu__nav" >
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="menu__nav--selected" ><i className="fa fa-home"/>Página Inicial</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre" activeClassName="menu__nav--selected" ><i className="fa fa-user"/>Sobre Mim</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="menu__nav--selected" ><i className="fa fa-desktop"/>Portfólio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="menu__nav--selected" ><i className="fa fa-envelope"/>Contato</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu