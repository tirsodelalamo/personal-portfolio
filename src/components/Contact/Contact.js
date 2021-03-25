import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import './Contact.css'
import Email from '../../socialMedia/email.png'
import Linkedin from '../../socialMedia/linkedin.png'
import Github from '../../socialMedia/github.png'
import Instagram from '../../socialMedia/instagram.png'

import Signature from '../../signature.svg'

const Contact = () => {
    return (
      <section id="Contact" className="contact">
        <h1>CONTACT</h1>
        <Container>
          <Row>
            <Col>
              <figure>
                <Image className='signature' src={Signature} alt='Tirso del Álamo'/>
              </figure>
            </Col>
            <Col>
              <h2>Get in touch</h2>
              <aside>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </aside>
              <ul className='social-media'>
                <li><a href="mailto:tirsodelalamomartin@gmail.com" title="Email" target="blank"><img className="icon" src={Email} alt="Email"/></a></li>
                <li><a href="https://www.linkedin.com/in/tirsodelalamomartin/" title="LinkedIn" target="blank"><img className="icon" src={Linkedin} alt="LinkedIn"/></a></li>
                <li><a href="https://github.com/tirsodelalamo" title="Github" target="blank"><img className="icon" src={Github} alt="Github"/></a></li>
                <li><a href="https://www.instagram.com/tirsodelalamo/" title="Instagram" target="blank"><img className="icon" src={Instagram} alt="Instagram"/></a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
 
export default Contact;