import './Section.css'
import React from 'react'

const Section = props => {

    const Title = props.title
    const Subtitle = props.subtitle ? props.subtitle : false

    const noturneTheme = props.noturneTheme

    return(
        <section className={`section ${ noturneTheme? 'section--noturne' : '' }`}>
            <div className="section__title">
                <h2>{Title}</h2>
                {
                    Subtitle ? <h3>{Subtitle}</h3> : ''
                }
            </div>
            <div className="section__content">
                {props.children}
            </div>
        </section>
    )
}

export default Section