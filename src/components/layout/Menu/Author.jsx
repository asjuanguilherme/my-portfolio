import React from 'react'
import './Author.css'

import PhotoContainer from './PhotoContainer'
import MyPhoto from './author-photo.jpg'

const Author = props => {

    const sidebarMini = props.sidebarMini
    const noturneTheme = props.noturneTheme

    return(
        <div className="author">
           <PhotoContainer sidebarMini={ sidebarMini } photo={MyPhoto} />
           <div className={`author-info ${ noturneTheme? 'author-info--noturne' : '' }`}>
                <div className="author-info__name">{ sidebarMini? 'JG' : 'Juan Guilherme'}</div>
                <div className="author-info__description">{ sidebarMini? '' : 'Desenvolvedor Front-End'}</div>
           </div>
        </div>
    )
}

export default Author