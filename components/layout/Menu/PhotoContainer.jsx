import React from 'react'
import './PhotoContainer.css'

const PhotoContainer = props => {

    const Photo = props.photo

    return(
        <div className="photo_container">
            <img src={Photo}/>
        </div>
    )
}

export default PhotoContainer