import React from 'react'
import './PhotoContainer.css'

const PhotoContainer = props => {

    const Photo = props.photo

    const sidebarMini = props.sidebarMini

    return(
        <div className={`photo_container ${ sidebarMini? 'photo_container--mini' : '' }`} >
            <img src={ Photo }/>
        </div>
    )
}

export default PhotoContainer