import './Showcase.css'
import React, { useState } from 'react'

import ShowcaseController from './ShowcaseController'

const Showcase = props => {

    const [columns, setColumns] = useState("1fr 1fr 1fr")

    const valueController = (value) => {
        setColumns(value)
    }

    const showcaseGridStyles = {
        gridTemplateColumns: columns
    }

    return (
        <>
            <ShowcaseController valueController={ valueController } />
            <div className="showcase" style={ showcaseGridStyles } >
                { props.children }
            </div>
        </>
    )
}

export default Showcase