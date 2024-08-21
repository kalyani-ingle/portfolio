import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import {Link} from "react-router-dom";

function Projects() {

  return (
    <div id="projects">
      <div id="innerProject">
        <Card>
          <h1 style={{textAlign:"center", margin:"12px", color:"deeppink", fontFamily:"Sacramento", transition: "transform 0.2s ease-out", fontSize:"55px"}}> My Projects </h1>
          <CardActionArea>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardMedia
                  style={{ padding: "20px" }}
                  component="img"
                  height="350"
                  image="/pet_regis.png"
                  alt="petPortal"
                  className="card-image"
                  id="petPortal"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="card-title"
                  >
                    Pet Registration Portal
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="subtitle"
                  >
                    EXPRESS | MongoDB | REACT | NODE.JS
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.tertiary"
                    className="card-content"
                    component="div"
                  >
                    <ul>
                      <li>
                        <strong>User Registration: </strong>Users are required to register to the portal before proceeding to the pet registration form.
                        The user input is validated against respective regex. 
                      </li>
                      <li>
                        <strong>User Login: </strong>Allowing already registered users, through existing email and bcrypt password compare.
                      </li>

                      <li>
                        <strong>Private Routes: </strong>Implemented token (JWT) authentication based access to the pet registration route. 
                      </li>
                      <li>
                        <strong> Form Data Storage: </strong> Capture data from user/pet registration forms and store it securely in mongodb.
                      </li>
                    </ul>
                  </Typography>
                  <CardActions>
                    <Link to ="https://pet-registration-portal.vercel.app" target="_blank"> 
                        Live Demo
                    </Link>
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
        <br /> <br />

        <Card>
          <CardActionArea>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardMedia
                  style={{ padding: "20px" }}
                  component="img"
                  height="350"
                  image="/todo.png"
                  alt="dailyTasks"
                  className="card-image todo"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-title"
                  >
                    Todo App
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="subtitle"
                  >
                    SVELTE | CSS | HTML
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.tertiary"
                    className="card-content"
                    component="div"
                  >
                    <ul>
                    Developed a Svelte-powered todo app featuring a clean, intuitive interface, keeping user experience in mind.
                      <li>
                        <strong> Intuitive user interface for adding, editing, and deleting tasks: </strong> 
                        Users can easily add, edit, and delete tasks through a clean, user-friendly interface.
                      </li>
                      <li>
                        <strong> Local storage integration for data persistence: </strong> 
                        All tasks are automatically saved to the browser&apos;s local storage, ensuring data persistence across sessions and page reloads.
                      </li>
                      <li>
                        <strong> Real-time task list updates: </strong> 
                        The task list updates instantly as users add, modify, or remove items, providing immediate visual feedback.
                      </li>
                      <li>
                        <strong> Modal-based task editing with user notifications: </strong> 
                        Tasks can be edited via a pop-up modal. Users receive notifications for successful updates or when no changes are made.
                      </li>
                    </ul>
                  </Typography>
                  <CardActions>
                    <Link to="https://kalyani-ingle.github.io/dailyTasks" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </Link>
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
        <br /> <br />

        <Card>
          <CardActionArea>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardMedia
                  style={{ padding: "20px" }}
                  component="img"
                  height="350"
                  image="/ttt.png"
                  alt="TicTacToe"
                  className="card-image"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="card-title"
                  >
                    Tic-Tac-Toe
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="subtitle"
                  >
                    HTML | CSS | JAVASCRIPT
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.tertiary"
                    className="card-content"
                    component="div"
                  >
                    <ul>
                      Strategize and compete as you input your marks, aiming for
                      victory in this timeless battle of Xs and Os
                      <li>
                        <strong>Interactive Gameplay:</strong> Two-player mode
                      </li>
                      <li>
                        <strong>Manual Mark Selection:</strong> Before starting
                        the game, players have the option to choose their
                        preferred mark — X or O
                      </li>
                      <li>
                        <strong>Dynamic Display:</strong> The game dynamically highlights winning
                        combinations and displays the victorious player.{" "}
                      </li>
                      <li>
                        <strong>Manual Reset on Draw:</strong> In the event of a
                        draw, the game offers a manual reset feature, allowing
                        players to start a new match with just a click.
                      </li>
                    </ul>
                  </Typography>
                  <CardActions>
                    <Link to="https://kalyani-ingle.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </Link>
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
        <br /> <br />

        <Card>
          <CardActionArea>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="card-title"
                  >
                    Calculator
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="subtitle"
                  >
                    JAVASCRIPT
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.tertiary"
                    className="card-content"
                    component="div"
                  >
                    <ul>
                      Developed as a part of a Frontend Mentor challenge: The calculator UI was provided beforehand while JS logic building was the main challenge
                      <li>
                        <strong> Basic Arithmetic Operations:</strong> Perform
                        addition, subtraction, multiplication, and division.
                      </li>
                      <li>
                        <strong> Decimal Support:</strong> Handle decimal
                        numbers seamlessly, allowing precise calculations.
                      </li>
                      <li>
                        <strong> Error Handling: </strong> Display
                        &quot;Infinity&quot; when attempting to divide by zero,
                        ensuring smooth user experience and preventing crashes.
                      </li>
                      <li>
                        <strong> Input Validation:</strong> Omit results for
                        invalid expressions.
                      </li>
                      <li>
                        <strong> Clear Screen Feature:</strong> Reset the
                        calculator screen with the clear screen feature,
                        enabling users to start fresh with their calculations.
                      </li>
                    </ul>
                  </Typography>
                  <CardActions>
                    <Link to="https://kalyani-ingle.github.io/calculator" target="_blank" rel="noopener noreferrer">
                          Live Demo
                      </Link>
                  </CardActions>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardMedia
                  style={{ padding: "20px" }}
                  component="img"
                  height="350"
                  image="/calculator.png"
                  alt="calculator"
                  className="card-image calci"
                />
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
        <br /> <br />

        <Card>
          <CardActionArea>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="card-title"
                  >
                    User Management System
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="subtitle"
                  >
                    NODE.JS | MongoDB
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.tertiary"
                    className="card-content"
                    component="div"
                  >
                    <ul>
                      The User Management system is a full-stack web application designed to demonstrate the implementation of CRUD operations. It utilizes Node.js for server-side logic, EJS for templating, and MongoDB as the database management system.
                      <li>
                        <strong> User Creation: </strong> 
                        Users can create new accounts through a user-friendly interface. The application handles form validation and displays appropriate feedback messages.
                      </li>
                      <li>
                        <strong> Read/Display Users: </strong>
                        A list of all users is dynamically generated and displayed on the frontend.
                      </li>
                      <li>
                        <strong>Update User Information: </strong>
                        Users can update their information through editable forms. The application ensures that both the frontend and the database reflect these changes in real-time.
                      </li>
                      <li>
                        <strong> Delete User: </strong>
                        Users have the ability to delete their accounts. The system prompts for confirmation before the final deletion to prevent accidental data loss.
                      </li>
                    </ul>
                  </Typography>
                  <CardActions>
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </Link>
                  </CardActions>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardMedia
                  style={{ padding: "20px"}}
                  component="img"
                  height="350"
                  image="/UMS.png"
                  alt="User Management System"
                  className="card-image"
                />
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>

      </div>
    </div>
  );
}

export default Projects;
