import React from 'react'
import './Author.css'

import PhotoContainer from './PhotoContainer'
import MyPhoto from './author-photo.jpg'

const Author = () => {
    return(
        <div className="author">
           <PhotoContainer photo={MyPhoto} />
           <div className="author-info">
                <div className="author-info__name">Juan Guilherme</div>
                <div className="author-info__description">Desenvolvedor Front-End</div>
           </div>
        </div>
    )
}

export default Author