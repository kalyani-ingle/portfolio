import React from 'react'
import Typewriter from "typewriter-effect";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';

 function About() {
  return (
    <div id="home">
        <section className="mini">
          
          <div className="cloud1"> </div>
          <div className="cloud2"> </div>
    
          <div className="bird1"> </div>
          <div className="bird1"> </div>
          <div className="bird2"> </div>
          <div className="bird2"> </div>

          <div className="intro">
            <p> Hi, I&apos;m Kalyani </p>
          </div>
          
          <div className="typewriter">
            <Typewriter
              options={{
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("A Software Developer")
                  .pauseFor(20)
                  .deleteAll({ delay: 6 }) // Decrease delay for faster deletion
                  .typeString("An Urban Planner")
                  .pauseFor(20)
                  .deleteAll({ delay: 6 })
                  .typeString("An Architect!")
                  .start();
              }}
            />
          </div>
            
          <div id="mountain"> </div>
          
          {/* <div id="Home-btn"> 
          <Link to="/kalyaniIngle-resume" target="_blank" rel="noopener noreferrer">
            <Button
                variant="outlined"
                style={{marginTop:"14px"}}
              >
                Resume
              </Button>
          </Link>
          </div> */}
        </section>
    </div>
  );
}

export default About;

