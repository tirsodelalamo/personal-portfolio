import React from 'react';
import './Projects.css'
import ProjectCard from './ProjectCard/ProjectCard'

import {Row} from "react-bootstrap";


const Projects = (props) => {

    console.log(props)

    return ( 
        <section className='projects' id='Projects'>
            <h1>PROJECTS</h1>
            <Row className='cards' md={3}>
                {props.projects.map(project => {
                    return(
                        <ProjectCard key={project.id} id={project.id} name={project.name} description={project.description} image={project.image} github={project.github} url={project.url} tech={project.tech} />
                    )
                })}
            </Row>
        </section>
     );
}
 
export default Projects;