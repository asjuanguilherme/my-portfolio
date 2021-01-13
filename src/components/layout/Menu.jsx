import './Menu.css'
import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import ThemeController from './ThemeController'
import SidebarController from './SidebarController'
import AuthorInf from './Menu/Author'

const Menu = props => {

    const sidebarMini = props.sidebarMini
    const sidebarWidthController = props.sidebarWidthController

    const changeTheme = props.themeController
    const noturneTheme = props.noturneTheme

    return (
        <aside className={`menu ${ sidebarMini? 'menu--mini' : ''} ${ noturneTheme? 'menu--noturne' : ''}`}>
        
            <AuthorInf noturneTheme={ noturneTheme } sidebarMini={ sidebarMini } />

            <SidebarController noturneTheme={ noturneTheme } controllerValue={ sidebarMini }  controllerFunction={ sidebarWidthController } />
            
            <ThemeController themeController={ changeTheme } noturneTheme={ noturneTheme } ></ThemeController>

            <nav className={`menu__nav ${ noturneTheme? 'menu__nav--noturne' : '' }`} >
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="menu__nav--selected" ><i className="fa fa-home"/>{ sidebarMini? '' : 'Página Inicial' }</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre" activeClassName="menu__nav--selected" ><i className="fa fa-user"/>{ sidebarMini? '' : 'Sobre Mim' }</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="menu__nav--selected" ><i className="fa fa-desktop"/>{ sidebarMini? '' : 'Portfólio' }</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="menu__nav--selected" ><i className="fa fa-envelope"/>{ sidebarMini? '' : 'Contato' }</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu