import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import "@/app/styles/projects.css";

const data = [
  {
    id: 0,
    title: "Todo List App",
    desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/project1.png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
    img: "/project2.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
    img: "/project3.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;