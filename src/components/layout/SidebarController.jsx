import './SidebarController.css'
import React from 'react'

const SidebarController = props => {

    const controllerFunction = props.controllerFunction
    const controllerValue = props.controllerValue

    return(
        <span className="sidebar__width-controller" onClick={ () => controllerFunction() } >
            <i className={ controllerValue? 'fal fa-angle-right' : 'fal fa-angle-left' } ></i>
        </span>
    )
}

export default SidebarController