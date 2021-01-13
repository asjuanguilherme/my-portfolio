import React from 'react'
import './About.css'

import Section from '../../components/Basic/Section'
import Icon from '../../components/Basic/Icon'

const About = props => {
  
  const noturneTheme = props.noturneTheme

  return(
    <>
    <Section title="Sobre Mim">
      Me chamo Juan Guilherme de Oliveira, sou natural de Natal-RN e sou um desenvolvedor web front-end. Atualmente curso bacharelado em tecnologia da informação e pretendo seguir como Engenheiro de Software.
      <br/><br/>
      Sou altamente curioso e motivado a conhecer cada vez mais sobre novas técnicas e tecnologias. Também sou aspirante em design e UX e UI.
    </Section>

    <Section title="Minhas Habilidades">
      Tenho um sólido conhecimento nas principais tecnologias da web como HTML e CSS e no ecossistema Javascript.
      <br/><br/>
      <div className="about__stacks">
        <Icon noturneTheme={ noturneTheme } animatedColor="#DE980D" label="Javascript" icon="fab fa-js" />
        <Icon noturneTheme={ noturneTheme } animatedColor="#31B4D8" label="React" icon="fab fa-react" />
        <Icon noturneTheme={ noturneTheme } animatedColor="#70B71D" label="Node" icon="fab fa-node-js" />
        <Icon noturneTheme={ noturneTheme } animatedColor="#C54B16" label="HTML5" icon="fab fa-html5" />
        <Icon noturneTheme={ noturneTheme } animatedColor="#61B2F3" label="CSS3" icon="fab fa-css3-alt" />
        <Icon noturneTheme={ noturneTheme } animatedEffect label="GitHub" icon="fab fa-github" />
        <Icon noturneTheme={ noturneTheme } animatedEffect label="UX e UI" icon="fa fa-pencil-ruler" />
        <Icon noturneTheme={ noturneTheme } animatedEffect label="Design Responsivo" icon="fa fa-tablet-android-alt" />
      </div>
    </Section>
    </>
  )
}

export default About