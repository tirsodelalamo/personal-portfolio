import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import './About.css'
import Pdf from "../../CV TIRSO DEL ÁLAMO (EN).pdf";
import Tirso from '../../Tirso.jpg'

const About = () => {
  return (
      <>
      <section id="About">
        <h3>ABOUT ME</h3>
        <Container>
          <Row>
            <Col xs lg="8">
              <div className='about-text'>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </div>
              <a href={Pdf}>Click here for my CV</a>
            </Col>
            <Col xs lg="2">
              <Image className='avatar' src={Tirso} />
            </Col>
          </Row>
        </Container>
      </section>
      </>
    );
}
 
export default About;