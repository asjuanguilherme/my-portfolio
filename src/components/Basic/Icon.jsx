import React, { useState } from 'react'
import './Icon.css'

const Icon = props => {

    const icon = props.icon
    const label = props.label
    const link = props.link

    const initialColor = props.color? props.color : '#686868'
    const animatedColor = props.animatedColor? props.animatedColor : '#6556DF'
    
    const [color, setColor] = useState(initialColor)

    const iconTemplateStyle = {
        color: color,
        fontWeight: props.weight,
        fontSize: props.size,
        marginRight: props.marginX
    }

    const changeColor = () => {
        if( props.animatedColor || props.animatedEffect ) {
            setColor(animatedColor)       
        }
    }

    const returnColor = () => {
        if( props.animatedColor || props.animatedEffect ) {
            setColor(initialColor)       
        }
    }

    return (
        <span className="icon-template" onMouseOver={ changeColor } onMouseLeave={ returnColor } style={ iconTemplateStyle }>
            <a href={ link } target="_blank" >
                <i className={ icon }></i>
                <span className="icon-template__label">
                    { label }
                </span>
            </a>
        </span>
    )
}

export default Icon