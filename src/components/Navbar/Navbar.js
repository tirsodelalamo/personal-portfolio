import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Navbar.styled';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <a href="#Home" open={open} onClick={() => setOpen(!open)}>
          <span role="img" aria-label="home"></span>
          Home
        </a>
        <a href="#About" open={open} onClick={() => setOpen(!open)}>
          <span role="img" aria-label="about"></span>
          About
        </a>
        <a href="#Skills" open={open} onClick={() => setOpen(!open)}>
          <span role="img" aria-label="skills"></span>
          Skills
        </a>
        <a href="#Projects" open={open} onClick={() => setOpen(!open)}>
          <span role="img" aria-label="projects"></span>
          Projects
        </a>
        <a href="#Contact" open={open} onClick={() => setOpen(!open)}>
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

