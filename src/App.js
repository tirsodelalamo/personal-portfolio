import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import projects from './projects.json'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Skills />
      <Projects projects={projects}/>
      <Contact />
      <Footer />
    </>  
  );
}

export default App;
