import React from 'react';
import './ProjectCard.css'

import { Card, Button } from "react-bootstrap";

const ProjectCard = (props) => {
    return (

        <Card className='card' style={{ width: "20rem" }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button variant="primary">Github</Button>
            <Button variant="primary">Link</Button>
          </Card.Body>
        </Card>
    );
}
 
export default ProjectCard;