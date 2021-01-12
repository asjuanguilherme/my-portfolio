import './Showcase.css'
import React from 'react'

const Showcase = props => {
    
    return(
        <div className="showcase">
            { props.children }
        </div>
    )
}

export default Showcase