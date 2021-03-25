import React from "react";
import "./Home.css";
import data from "../../resumeData.json";

import Typewriter from "typewriter-effect";

const Home = () => {
  console.log(data);

  return (
    <>
      <div className="home">
      <Typewriter

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
       />
    </div>
    </>
  );
};

export default Home;