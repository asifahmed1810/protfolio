import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/donate.jpg";
import project2 from "../assets/archutecs.png";
import project3 from "../assets/fitness.png";
import medi from "../assets/mediflow.png";
import chill from "../assets/gamezone-dribbble-1.png";
import volunteer from "../assets/slider2.png";
import bistro from "../assets/bistro.png";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="px-4">
      <h2 className="text-4xl text-center font-bold text-orange-600 mt-16">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-8 ">
        {projects.slice(0, 6).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/projects"}>
          <h1 className="btn btn-neutral">See All Projects</h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
