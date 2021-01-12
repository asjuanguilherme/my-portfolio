import './Input.css'
import React from 'react'

const Input = props => {

    const type = props.type
    const name = props.name
    const placeholder = props.placeholder

    return (
        <>
            { (props.type === 'text')? <input className="input" type={ type } placeholder={ placeholder } /> : ''}
            { (props.type === 'textarea')? <textarea className="input" placeholder={ placeholder } /> : ''}
        </>
    )
}

export default Input