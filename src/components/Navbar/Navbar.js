import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Navbar.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#home">
          <span role="img" aria-label="home"></span>
          Home
        </a>
        <a href="#About">
          <span role="img" aria-label="about"></span>
          About
        </a>
        <a href="#Skills">
          <span role="img" aria-label="skills"></span>
          Skills
        </a>
        <a href="#Projects">
          <span role="img" aria-label="projects"></span>
          Projects
        </a>
        <a href="#Contact">
          <span role="img" aria-label="contact"></span>
          Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;

