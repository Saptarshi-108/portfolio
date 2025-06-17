import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projectData = [
  {
    title: "TECHTICAL",
    description:
      "A full-stack web platform focused on exploring warfare, geopolitics, military strategies, and their humanitarian consequences.",
    image: "/techtical.png",
    link: "https://techtical.vercel.app/",
  },
  {
    title: "Task-Master",
    description:
      "Pomodoro website with Timer for work and breaks. Also lets you play music from my personally curated playlist of the same name (as the website).",
    image: "/taskmaster.png",
    link: "https://taskmaster-lac.vercel.app/",
  },
  {
    title: "Foodilies.",
    description:
      "End-to-end food ordering system with separate roles for customers, delivery agents for a restaurant.",
    image: "/projects/food-app.png",
    link: "https://your-domain.com/food-app",
  },
  {
    title: "Healthcare Website",
    description:
      "Our healthcare website project made with a team of 4 people for diversion 2k25.",
    image: "/medica.png",
    link: "https://medicahospitals.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project <FaExternalLinkAlt className="link-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
