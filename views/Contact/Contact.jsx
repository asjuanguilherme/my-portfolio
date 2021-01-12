import React from 'react'
import './Contact.css'

import Section from '../../components/Basic/Section'
import Icon from '../../components/Basic/Icon'
import Input from './Input'
import Button from '../../components/Basic/Button'

const Contact = () => {

  const iconColor = "#7070FF"
  const iconSize = "28px"
  const iconMargin = "30px"

  return(
      <>
      <Section title="Contato">
        Você pode entrar em contato comigo por qualquer uma das minhas  redes sociais que estão abaixo, por email ou através do formulário de contato!
        <br/><br/>
        
        <div style={ { display: 'flex' } } >
          <Icon marginX={ iconMargin } size={ iconSize } link="https://www.twitter.com/asjuanguilherme" icon="fab fa-twitter" color={ iconColor } />
          <Icon marginX={ iconMargin } size={ iconSize } link="https://www.instagram.com/asjuanguilherme" icon="fab fa-instagram" color={ iconColor } />
          <Icon marginX={ iconMargin } size={ iconSize } link="https://www.linkedin.com/in/juan-guilherme-504471160/" icon="fab fa-linkedin" color={ iconColor } />
          <Icon marginX={ iconMargin } size={ iconSize } link="https://github.com/asjuanguilherme" icon="fab fa-github" color={ iconColor } />
          <Icon marginX={ iconMargin } size={ iconSize } icon="fa fa-envelope" color={ iconColor } />
        </div>

        <form className="contact-form">
          <Input type="text" placeholder="Seu nome ex: Steve Jobs" />
          <Input type="text" placeholder="Seu email ex: stevejobs@apple.com" />
          <Input type="textarea" placeholder="Escreva sua mensagem aqui..." />
          <Button label="Enviar Mensagem" icon="fa fa-paper-plane" />
        </form>
      </Section>
      </>
  )
}

export default Contact