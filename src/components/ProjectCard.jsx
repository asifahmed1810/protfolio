import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    return (
        <div className="card bg-slate-900 text-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 h-[21rem]">
        <div className="w-full h-52  p-4 flex justify-center">
            <img src={project.image} alt={project.name} className="w-full  h-52      object-cover rounded-lg" />
        </div>
        <div className="p-4 ">
            <h2 className="text-2xl font-bold mt-2 text-white">{project.name}</h2>
            <button
                onClick={() => navigate(`/projects/${project.id}`, { state: { project } })}
                className="btn btn-neutral mt-4"
            >
                View More / Details
            </button>
        </div>
    </div>
    
    );
};

export default ProjectCard;
