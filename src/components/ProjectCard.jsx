import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className={`card bg-slate-900 text-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${
                showDetails ? 'h-auto' : 'h-[24rem]'
            }`}
        >
            {/* Project Image */}
            <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                {/* Project Title */}
                <h2 className="text-2xl font-bold text-rose-500">{project.name}</h2>
                {/* View More/Details Button */}
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="btn btn-neutral mt-4"
                >
                    {showDetails ? 'Hide Details' : 'View More / Details'}
                </button>

                {/* Project Details */}
                {showDetails && (
                    <div className="mt-6 space-y-4 bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl font-bold text-blue-400">Details:</h3>
                        <p>
                            <strong>Main Tech Stack:</strong> {project.techStack}
                        </p>
                        <p>
                            <strong>Description:</strong> {project.description}
                        </p>
                        <div className="space-y-2">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Live Project
                            </a>
                            <br />
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                GitHub Repository
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-yellow-400">Challenges:</h3>
                        <p>{project.challenges}</p>
                        <h3 className="text-xl font-bold text-green-400">Future Improvements:</h3>
                        <p>{project.improvements}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
