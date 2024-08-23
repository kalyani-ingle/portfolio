"use client";
import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Pet Registration Portal",
    image: "/pet_regis.png",
    alt: "petPortal",
    tech: "EXPRESS | MongoDB | REACT | NODE.JS",
    description: [
      { header: "User Registration", text: "Users are required to register to the portal before proceeding to the pet registration form. The user input is validated against respective regex." },
      { header: "User Login", text: "Allowing already registered users, through existing email and bcrypt password compare." },
      { header: "Private Routes", text: "Implemented token (JWT)based authentication access to the pet registration route." },
      { header: "Form Data Storage", text: "Capture data from user/pet registration forms and store it securely in MongoDB." }
    ],
    demoLink: "https://pet-registration-portal.vercel.app"
  },
  {
    title: "Daily Tasks",
    image: "/todo.png",
    alt: "dailyTasks",
    tech: "SVELTE | CSS | HTML",
    description: [
      { header: "Intuitive user interface", text: "Users can easily add, edit, and delete tasks" },
      { header: "Local storage integration for data persistence", text: "All tasks are automatically saved to the browser&apos;s local storage, ensuring data persistence across sessions and page reloads." },
      { header: "Real-time task list updates", text: "The task list updates instantly as users add, modify, or remove items, providing immediate visual feedback." },
      { header: "Modal-based task editing with user notifications", text: "Tasks can be edited via a pop-up modal. Users receive notifications for successful updates or when no changes are made." }
    ],
    demoLink: "https://kalyani-ingle.github.io/dailyTasks"
  },
  {
    title: "Tic-Tac-Toe",
    image: "/ttt.png",
    alt: "TicTacToe",
    tech: "HTML | CSS | JAVASCRIPT",
    description: [
      { header: "Interactive Gameplay", text: "Two-player mode." },
      { header: "Manual Mark Selection", text: "Choose preferred mark — X or O." },
      { header: "Dynamic Display", text: "Highlights winning combinations and displays the victorious player." },
      { header: "Manual Reset on Draw", text: "Offers a manual reset feature for a new match." }
    ],
    demoLink: "https://kalyani-ingle.github.io/tic-tac-toe/"
  },
  {
    title: "Calculator",
    image: "/calculator.png",
    alt: "calculator",
    tech: "JAVASCRIPT",
    description: [
      { header: "Basic Arithmetic Operations", text: "Perform addition, subtraction, multiplication, and division." },
      { header: "Decimal Support", text: "Handle decimal numbers seamlessly." },
      { header: "Error Handling", text: "Display 'Infinity' for division by zero." },
      { header: "Input Validation", text: "Omit results for invalid expressions." },
      { header: "Clear Screen Feature", text: "Reset the calculator screen for new calculations." }
    ],
    demoLink: "https://kalyani-ingle.github.io/calculator"
  }
];

function Projects() {
  return (
    <div id="projects">
      <div id="innerProject">
        <h1 style={{ textAlign: "center", margin: "12px", color: "deeppink", fontFamily: "Sacramento", transition: "transform 0.2s ease-out", fontSize: "55px" }}>
          My Projects
        </h1>
        {projects.map((project, index) => (
          <Card key={index} style={{ marginBottom: "20px" }}>
            <CardActionArea>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <CardMedia
                    style={{ padding: "20px" }}
                    component="img"
                    height="350"
                    image={project.image}
                    alt={project.alt}
                    className="card-image"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" className="card-title">
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className="subtitle">
                      {project.tech}
                    </Typography>
                    <Typography variant="body2" color="text.tertiary" className="card-content" component="div">
                      <ul>
                        {project.description.map((desc, idx) => (
                          <li key={idx}>
                            <strong>{desc.header}: </strong>{desc.text}
                          </li>
                        ))}
                      </ul>
                    </Typography>
                    <CardActions>
                      <Link to={project.demoLink} target="_blank" rel="noopener noreferrer" style={{fontSize:"15px"}}>
                        Live Demo
                      </Link>
                    </CardActions>
                  </CardContent>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
