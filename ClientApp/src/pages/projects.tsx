import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Our Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <img src={project.imageUrl} alt={project.name} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
