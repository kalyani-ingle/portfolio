"use client";
import React from "react";
import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";

function Skills() {
  return (
    <section id="about">
      <div className="photo" id="knowMore">
        <img
          id="developer"
          src="/kalyaniResumePic.jpg"
          alt="Web Developer Portfolio: Kalyani Ingle"
        />
        <h1>Hey!</h1>
        <div
          id="education"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            padding: "0 1em",
            lineHeight: "1em",
          }}
        >
          <img
            src="/education.png"
            height="35"
            width="35"
            alt="Education Icon"
          />
          <p style={{ borderLeft: "1px dotted purple", padding: "5px" }}>
            B.Arch, Master of City Planning (MCP) and PhD in Urban Planning from
            IIT Kharagpur
          </p>
        </div>
        <hr className="gradient-hr" />
        <div id="socials">
          <a
            href="https://www.linkedin.com/in/kalyani-ingle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &nbsp;
          <a
            href="https://github.com/kalyani-ingle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p id="pcenter">
          After completing my PhD, I took an unexpected turn – straight into the
          world of web development! What started as a deep dive into Python for
          data analysis, statistical modeling, and visualization during my
          research quickly ignited a passion for programming. By December 2022,
          I earned my Doctoral Degree from IIT Kharagpur and a new set of skills
          to boot! Since then, I&apos;ve been on a quest to master technologies
          like JavaScript, ReactJS, Express, Svelte, and beyond.
          <br />
          <HashLink smooth to="#projects">
            <Button variant="outlined" style={{ marginTop: "14px" }}>
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
            color: "#ca1b7b",
          }}
        >
          Tech Stack
        </h2>
        <div className="iconsBundle">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
            alt="HTML5"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
            alt="CSS3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
            alt="JavaScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            alt="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
            alt="Svelte"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
            alt="Node.js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            alt="Express"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg"
            alt="Mongoose"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
            alt="MongoDB"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"
            alt="Git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            alt="Figma"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
