import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Projects",
  description: "A list of projects I have worked on.",
};

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "Project One",
      description: "This is a description of project one.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "This is a description of project two.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "This is a description of project three.",
      link: "#",
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
