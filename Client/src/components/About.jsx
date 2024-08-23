"use client";
import React from "react";
// import Typewriter from "typewriter-effect";
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

        {/* <div className="typewriter">
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
          </div> */}
        <div className="typewriter">
          <section className="section-process">
            <div className="section-container">
              <div className="process-steps-container container-medium with-padding">
                <div className="process-step-container process-step-1">
                  <div className="process-step-title-container">
                    <h1 className="process-step-title">
                      {" "}
                      • An Architect •&nbsp;
                    </h1>
                    <div className="process-step-title-overlay">
                      {" "}
                      • An Architect •&nbsp;
                    </div>
                  </div>
                </div>
                <div className="process-step-container process-step-2">
                  <div className="process-step-title-container">
                    <h1 className="process-step-title">
                      {" "}
                      Urban Planner •&nbsp;
                    </h1>
                    <div className="process-step-title-overlay">
                      {" "}
                      Urban Planner •&nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-container">
              <div className="process-steps-container container-medium with-padding">
                <div className="process-step-container process-step-3">
                  <div className="process-step-title-container">
                    <h1 className="process-step-title">
                      {" "}
                     ~ A Software Developer ~
                    </h1>
                    <div className="process-step-title-overlay">
                      {" "}
                     ~ A Software Developer ~
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="/software_developer.png" height="50" width="50" />
          </section>
        </div>
        <div id="mountain"> </div>

        {/* <div id="Home-btn"> 
          <Link to="/kalyaniIngle-resume" target="_blank" rel="noopener noreferrer">
            <Button
                variant="outlined"
                style={{marginBottom:"44px"}}
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
