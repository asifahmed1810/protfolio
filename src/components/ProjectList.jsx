import React from 'react';
import ProjectCard from './ProjectCard';
import project1 from '../assets/donate.jpg';
import project2 from '../assets/archutecs.jpg';
import project3 from '../assets/fitness.jpg';

const ProjectList = () => {
    const projects = [
        {
            id: 1, // Unique ID for each project
            name: "Donate-Bangladesh Website",
            image: project1,
            techStack: "React, Node.js, MongoDB",
            description: "An e-commerce platform with user authentication and payment gateway.",
            liveLink: "https://asifahmed1810.github.io/programming-hero-assignment-5/",
            githubLink: "https://github.com/asifahmed1810/programming-hero-assignment-5",
            challenges: "Integrating Stripe API and optimizing performance for large datasets.",
            improvements: "Adding admin dashboard, optimizing database queries, and implementing AI recommendations."
        },
        {
            id: 2,
            name: "Architect Website",
            image: project2,
            techStack: "React, Tailwind CSS",
            description: "A personal portfolio website showcasing my projects and blogs.",
            liveLink: "https://asifahmed1810.github.io/programming-hero-assignment-3/",
            githubLink: "https://github.com/asifahmed1810/programming-hero-assignment-3",
            challenges: "Ensuring responsiveness on all devices and SEO optimization.",
            improvements: "Adding a blog section and integrating dark mode toggle."
        },
        {
            id: 3,
            name: "Fitness Application",
            image: project3,
            techStack: "React, Firebase, Tailwind CSS",
            description: "A real-time chat application with user authentication.",
            liveLink: "https://asifahmed1810.github.io/programming-hero-assignment--2/",
            githubLink: "https://github.com/asifahmed1810/programming-hero-assignment--2",
            challenges: "Implementing real-time features and handling authentication securely.",
            improvements: "Adding video call functionality and optimizing loading speed."
        }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-8 mt-16">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} /> // Unique key prop
            ))}
        </div>
    );
};

export default ProjectList;
