import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import './Skills.css'
import Python from '../../skills/python.png'
import ReactLogo from '../../skills/react.png'
import JavascriptLogo from '../../skills/javascript.png'
import CLogo from '../../skills/c.png'
import Mongo from '../../skills/mongo.png'
import Node from '../../skills/node.png'
import Express from '../../skills/express.png'
import Html from '../../skills/html.png'
import Css from '../../skills/css.png'
import Bootstrap from '../../skills/bootstrap.png'
import Git from '../../skills/git.png'
import Sass from '../../skills/sass.png'

const Skills = () => {
    return (
      <section id="Skills" className="skills">
        <h1>SKILLS</h1>
        <Container>
          <Row className='col-skills' md={6}>
            <Col>
              <Image className="logo" src={Python} />
            </Col>
            <Col>
              <Image className="logo" src={ReactLogo} />
            </Col>
            <Col>
              <Image className="logo" src={JavascriptLogo} />
            </Col>
            <Col>
              <Image className="logo" src={CLogo} />
            </Col>
            <Col>
              <Image className="logo" src={Mongo} />
            </Col>
            <Col>
              <Image className="logo" src={Node} />
            </Col>
            <Col>
              <Image className="logo" src={Express} />
            </Col>
            <Col>
              <Image className="logo" src={Html} />
            </Col>
            <Col>
              <Image className="logo" src={Css} />
            </Col>
            <Col>
              <Image className="logo" src={Bootstrap} />
            </Col>
            <Col>
              <Image className="logo" src={Git} />
            </Col>
            <Col>
              <Image className="logo" src={Sass} />
            </Col>
          </Row>
        </Container>
      </section>
    );
}
 
export default Skills;