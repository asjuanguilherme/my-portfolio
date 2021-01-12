import './Button.css'
import React from 'react'

const Button = props => {


    return (
        <button 
            className="button"
            onClick={ props.onCLick }
        >
            { props.icon ? 
            (
                <i className={ props.icon } ></i>
            ) : ''}

            { props.label }

        </button>
    )
}

export default Button