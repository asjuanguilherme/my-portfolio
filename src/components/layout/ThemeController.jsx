import './ThemeController.css'
import React from 'react'

const ThemeController = props => {

    const changeTheme = props.themeController
    const noturneTheme = props.noturneTheme

    return(
        <span className={ `sidebar__theme-controller ${ noturneTheme? 'sidebar__theme-controller--active' : '' }`} onClick={ () => changeTheme() } >
            <i className={ noturneTheme? 'fas fa-lightbulb' : 'fas fa-lightbulb-on' } ></i>
        </span>
    )
}

export default ThemeController