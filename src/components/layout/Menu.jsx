import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

import AuthorInf from './Menu/Author'

const Menu = props => {
    return (
        <aside className="menu">
            <AuthorInf/>
            <nav className="menu__nav" >
                <ul>
                    <li>
                        <Link to="/"><i class="fa fa-home"/>Página Inicial</Link>
                    </li>
                    <li>
                        <Link to="/sobre"><i class="fa fa-user"/>Sobre Mim</Link>
                    </li>
                    <li>
                        <Link to="/portfolio"><i class="fa fa-desktop"/>Portfólio</Link>
                    </li>
                    <li>
                        <Link to="/contato"><i class="fa fa-envelope"/>Contato</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu