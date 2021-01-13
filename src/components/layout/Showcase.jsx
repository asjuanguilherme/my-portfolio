import './Showcase.css'
import React, { useState } from 'react'

import ShowcaseController from './ShowcaseController'

const Showcase = props => {

    localStorage.setItem('showcaseColumns', localStorage.showcaseColumns === undefined? "1fr 1fr" : localStorage.showcaseColumns )


    const [columns, setColumns] = useState( localStorage.showcaseColumns )

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