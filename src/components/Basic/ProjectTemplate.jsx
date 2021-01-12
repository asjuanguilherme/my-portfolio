import './ProjectTemplate.css'
import React from 'react'

const ProjectTemplate = props => {
    
    const Link = props.link
    const Photo = props.photo
    const Name = props.name ? props.name : 'Nome do Projeto'
    const Description = props.description ? props.description : 'Descrição do projeto' 

    return(
        <div className="project-template">
            <div>
                <img src={Photo} />
                <div className="project-template__informations">
                    <h4 className="name">
                        { Name }
                    </h4>
                    <div className="description">
                        { Description }
                    </div>
                    <a>ver mais</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate