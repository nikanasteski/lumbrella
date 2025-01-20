import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://localhost:7037/api/Project")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h2>Our Projects</h2>
        {projects.map((project) => (
          <div key={project.id}>
            <p>{project.title}</p>
            <img
              src={project.imageUrl}
              alt={project.title}
              //onError={(e) => (e.currentTarget.src = "fallback-image-url.jpg")}
            />
            <h1>{project.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
