import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/donate.jpg";
import project2 from "../assets/archutecs.png";
import project3 from "../assets/fitness.png";
import medi from "../assets/mediflow.png";
import chill from "../assets/gamezone-dribbble-1.png";
import volunteer from "../assets/slider2.png";
import bistro from'../assets/bistro.png'

const ProjectList = () => {

  const [projects,setProjects]=useState([]);
  

  useEffect(()=>{
    fetch('projects.json')
    .then(res=>res.json())
    .then(data=>setProjects(data))
  },[])



  return (
    <div className="px-4">
      <h2 className="text-4xl text-center font-bold text-orange-600 mt-16">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
