import React from "react";
import "./Home.css";
import data from "../../resumeData.json";

// import Earth from '../UI/Earth/Earth'

// import Typewriter from "typewriter-effect";

const Home = () => {
  console.log(data)

  return (
    <>
      <div className="home">
      <div className='intro-page'></div>
      {/* <Earth /> */}
      <div className='intro-text'>
        <h1>My name is <a href='https://www.linkedin.com/in/tirsodelalamomartin/'><span>Tirso del Álamo</span></a>,</h1>
        <h1>and this is my website.</h1>
        <h2>I'm a Full Stack Web Developer</h2>
      </div>
      {/* <Typewriter

       options={{
       delay: 50,
       loop: false
       }}
  
       onInit={(typewriter)=> {
  
       typewriter
       
       .typeString('<span class="a" >H</span><span class="a" >i</span><span class="a" >,</span>') 
       .pauseFor(500)
       .typeString('<br><span class="a" >I</span><span class="a" >m</span> <span class="a" >T</span><span class="a" >i</span><span class="a" >r</span><span class="a" >s</span><span class="a" >o</span><span class="a" >,</span>') 
       .pauseFor(500)
       .typeString('<br><span class="a" >W</span><span class="a" >e</span><span class="a" >b</span> <span class="a" >d</span><span class="a" >e</span><span class="a" >v</span><span class="a" >e</span><span class="a" >l</span><span class="a" >o</span><span class="a" >p</span><span class="a" >e</span><span class="a" >r</span>')
       .start();
       }}
       /> */}
    </div>
    </>
  );
};

export default Home;