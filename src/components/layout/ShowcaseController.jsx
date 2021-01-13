import './ShowcaseController.css'
import React, { useState } from 'react'

const ShowcaseController = props => {

    const sendValue = props.valueController

    const [columns, setColumns] = useState("1fr 1fr 1fr")

    const setActive = (value) => {
        setColumns(value)
        sendValue(value)
    }

    const optionActiveClass = "showcase-controller__option--active"

    return (
        <div className="showcase-controller">
            <span className={`showcase-controller__option ${ (columns === "1fr 1fr 1fr")? optionActiveClass : '' }`} onClick={ () => setActive("1fr 1fr 1fr") } >
                <i className="fal fa-th"></i>
            </span>

            <span className={`showcase-controller__option ${ (columns === "1fr 1fr")? optionActiveClass : '' }`} onClick={ () => setActive("1fr 1fr") } >
                <i className="fal fa-th-large"></i>
            </span>

            <span className={`showcase-controller__option ${ (columns === "1fr")? optionActiveClass : '' }`} onClick={ () => setActive("1fr") } >
                <i className="fal fa-stop"></i>
            </span>
        </div>
    )
}

export default ShowcaseController