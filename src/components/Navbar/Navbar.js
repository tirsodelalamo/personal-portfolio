import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
      <nav>
        <ul id="nav" className="navbar">
          <li>
            <a href="#home">
              HOME
            </a>
          </li>
          <li>
            <a href="#About">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#Skills">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#Projects">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#Contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

 
    );
}
 
export default Navbar;

