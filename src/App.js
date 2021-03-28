import React, { useState } from 'react';

import Burger from './components/UI/Burger'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import projects from './projects.json'

function App() {

  const [open, setOpen] = useState(false)

  return (

    <>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Navbar open={open} setOpen={setOpen} />
      </div>
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
