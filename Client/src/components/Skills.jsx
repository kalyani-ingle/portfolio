import React from 'react'

import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";

function Skills() {
  return (
      <div id="about">
        <div className="photo" id="knowMore">
          <img
          src="/kalyaniResumePic.jpg"
            alt="Web Developer Portfolio: Kalyani Ingle"
          />
          <h1>Hello!</h1>
          <p>
            I&apos;m Kalyani Ingle – an Architect, Urban Planner and
            a Software Developer. My journey into software development kicked
            off after I completed my PhD. During my PhD research, I dove into Python leveraging it for advanced data analysis, statistical modeling, and visualizations, which sparked my interest in programming. In December 2022, I graduated with my Doctoral
            Degree in Urban Planning from IIT Kharagpur. Since then, I&apos;ve picked up skills in technologies like
            JavaScript, ReactJS, Express, Svelte and more. I&apos;m excited to take on complex problems and learn new aspects of software development moving forward.
            <br/> 
            <HashLink smooth to="#projects">
              <Button
                variant="outlined"
                style={{marginTop:"14px"}}
              >
                View Projects
              </Button>
            </HashLink>
          </p>
        </div>

        <div className="skillIcons">
            <h2
              style={{
                marginTop: "0.3em",
                fontSize: "xx-large",
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "18px",
                color: "#ca1b7b"
              }}
            >
              Skills
            </h2>
          <div className="iconsBundle">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
          </div>
        </div>
      </div>
  );
}

export default Skills;
