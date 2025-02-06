import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const project = location.state?.project;

    if (!project) {
        return <div className="text-center text-2xl text-red-500 mt-10">Project not found!</div>;
    }

    return (
        <div className="p-8 mt-20 bg-gray-900 text-white min-h-screen">
            <h2 className="text-4xl font-bold text-orange-500 text-center">{project.name}</h2>
            <img src={project.image} alt={project.name} className="w-full max-w-4xl mx-auto mt-6 rounded-lg shadow-lg" />
            <div className="max-w-4xl mx-auto mt-6 space-y-6 bg-gray-800 p-6 rounded-lg shadow-xl">
                <p><strong className='text-orange-500 text-lg'>Tech Stack:</strong> {project.techStack}</p>
                <p><strong  className='text-orange-500 text-lg'>Description:</strong> {project.description}</p>
                <p><strong  className='text-orange-500 text-lg'>Challenges:</strong> {project.challenges}</p>
                <p><strong  className='text-orange-500 text-lg'>Future Improvements:</strong> {project.improvements}</p>
                <div className="space-x-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-neutral text-blue-400 underline">
                        Live Project
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-neutral text-blue-400 underline">
                        GitHub Repository
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
