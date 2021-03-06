import * as React from "react";
import classes from "./Projects.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// imges
import firstP from "../Img/todolist.jpeg";
import sntimntor from "../Img/simp.jpeg";
import vegee from "../Img/vege.jpeg";
import python from "../Img/python.jpeg";
import mp3 from "../Img/mp3.jpeg";
import wordpress from "../Img/wordpress.jpeg";
import med from "../Img/med.jpeg";
import Meals from "../Img/Meals.jpeg";
const Proj = [
  {
    id: 1,
    Name: "ToDoList",
    text: "Here you can add tasks and save them to API,Builed with JS",
    image: firstP,
    url: "https://romans1995.github.io/kanban-final/solution/",
  },
  {
    id: 2,
    Name: "sentmintor",
    text: "this app takes your text and telling you if its postive or not",
    image: sntimntor,
    url: "https://github.com/romans1995/sentimentor/tree/Roman-Branch",
  },
  {
    id: 3,
    Name: "VegeGo",
    image: vegee,
    text: "a vegetrain forum ,builed with php",
    url: "https://github.com/romans1995/VegeGo",
  },
  {
    id: 4,
    Name: "python Pong game",
    image: python,
    text: "This is a pong game that builed with python",
    url: "https://github.com/romans1995/python",
  },
  {
    id: 5,
    Name: "mp3",
    image: mp3,
    text: "Demo mp3 website builed with JS",
    url: "https://romans1995.github.io/MP3-DOM/",
  },
  {
    id: 6,
    Name: "wordpress gallery",
    image: wordpress,
    text: "This is a galery website for a photographer I made this website for a client in wordpress",
    url: "https://virakhrupa.com/",
  },
  {
    id: 7,
    Name: "Stav Barbi professional Business page",
    image: med,
    url: "https://www.stavbarbi.com/",
    text: "A profissonal Bussnes web ,that I builed with wix",
  },
  {
    id: 8,
    Name: "Food Order website",
    image: Meals,
    text: "Food order web that you can chose and add to cart meals,Builed with REACT",
    url: "https://github.com/romans1995/VeganFood",
  },
];
const ProjLoop = (props) => {
  console.log(props.theme);
  let colorTheme = props.theme === "dark" ? "black" : "white";
  let colorText = props.theme === "dark" ? "white" : "black";
  return (
    <>
      {Proj.map(({ id, Name, text, image, url }) => (
        <Card
          key={id}
          sx={{ width: 450, background: colorTheme, margin: "10px" }}
        >
          <CardActionArea>
            <CardMedia component="img" height="140" image={image} alt={Name} />
            <CardContent color={colorText}>
              <Typography gutterBottom variant="h5" component="div">
                {Name}
              </Typography>
              <Typography variant="body2" color={colorText}>
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href={url} target="__blank">
              View
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
const Projects = (props) => {
  return (
    <div className={classes.projwidth1}>
      <h1 className={classes.projtitle}>My Projects</h1>
      <div className={classes.projwidth}>
        <ProjLoop theme={props.theme} />
      </div>
    </div>
  );
};
export default Projects;
