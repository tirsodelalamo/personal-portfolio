import React from "react";
import "./Home.css";
import data from "../../resumeData.json";

// import Earth from '../UI/Earth/Earth'

const Home = () => {
  console.log(data)

  return (
    <>
      <div className="home" id="Home">
      <div className='intro-page'></div>
      {/* <Earth /> */}
      <div className='intro-text'>
        <h1>My name is <a href='https://www.linkedin.com/in/tirsodelalamomartin/'><span>Tirso del Álamo</span></a>,</h1>
        <h1>and this is my website.</h1>
        <h2>I'm a Full Stack Web Developer</h2>
      </div>
    </div>
    </>
  );
};

export default Home;