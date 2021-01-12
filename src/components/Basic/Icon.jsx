import React from 'react'
import './Icon.css'

const Icon = props => {

    const icon = props.icon
    const label = props.label
    const link = props.link

    const iconTemplateStyle = {
        color: props.color,
        fontWeight: props.weight,
        fontSize: props.size,
        marginRight: props.marginX
    }

    return (
        <span className="icon-template" style={ iconTemplateStyle }>
            <a href={ link } target="_blank" >
                <i class={ icon }></i>
                <span className="icon-template__label">
                    { label }
                </span>
            </a>
        </span>
    )
}

export default Icon