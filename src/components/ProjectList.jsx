import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/donate.jpg";
import project2 from "../assets/archutecs.png";
import project3 from "../assets/fitness.png";
import medi from "../assets/mediflow.png";
import chill from "../assets/gamezone-dribbble-1.jpg";
import volunteer from "../assets/slider2.jpg";
import bistro from'../assets/bistro.png'

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: "BistroBoss",
      image: bistro,
      techStack:
        "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Firebase Authentication",
      description:
        "BistroBoss is a modern restaurant management platform that simplifies ordering, reservations, and payments. Customers can browse menus, place orders, and make secure payments, while admins efficiently manage menus, track orders, and handle reservations.",
      liveLink: "https://bistro-boss-79537.web.app",
      githubLink: "https://github.com/asifahmed1810/bistro-boss-client",
      challenges:
        "Implementing secure login and Stripe Payment System.",
      improvements:
        "Enhancing the UI/UX and adding advanced analytics for Users .",
    },
    {
      id: 2,
      name: "Mediflow",
      image: medi,
      techStack:
        "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Firebase Authentication",
      description:
        "The Manage Camps Platform is a comprehensive solution for organizing, managing, and monitoring camps and participants.",
      liveLink: "https://mediflow-27ae3.web.app",
      githubLink: "https://github.com/asifahmed1810/medi-flow",
      challenges:
        "Implementing secure login and dynamic updates with real-time data.",
      improvements:
        "Enhancing the UI/UX and adding advanced analytics for camp management.",
    },
    {
      id: 3,
      name: "VolunteerHub",
      image: volunteer,
      techStack:
        "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Firebase Authentication",
      description:
        "A platform that connects volunteers with organizers for various events and activities, streamlining the volunteering process and fostering community engagement.",
      liveLink: "https://volunteerhub-fdad1.web.app",
      githubLink: "https://github.com/asifahmed1810/Volunteer-Hub",
      challenges:
        "Implementing user authentication and dynamic volunteer sign-up functionality.",
      improvements:
        "Adding analytics for organizers and advanced filtering for volunteer posts.",
    },
    {
      id: 4,
      name: "Chill Gamers",
      image: chill,
      techStack:
        "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Firebase Authentication",
      description:
        "A modern platform for interactive game review management with features like dynamic sorting, filtering, and a game watchlist.",
      liveLink: "https://gamezone-auth.web.app",
      githubLink: "https://github.com/asifahmed1810/Chill-Gamers",
      challenges:
        "Implementing dynamic sorting and filtering for user convenience.",
      improvements:
        "Adding more interactive features, such as personalized game recommendations.",
    },
    {
      id: 5,
      name: "Donate-Bangladesh Website",
      image: project1,
      techStack: "HTML, CSS, Tailwind CSS, DaisyUI, JavaScript",
      description: "It is a donating platform.",
      liveLink:
        "https://asifahmed1810.github.io/programming-hero-assignment-5/",
      githubLink:
        "https://github.com/asifahmed1810/programming-hero-assignment-5",
      challenges: "Integrating JavaScript functionalities.",
      improvements:
        "Adding admin dashboard, optimizing database queries, and implementing AI recommendations.",
    },
    {
      id: 6,
      name: "Architect Website",
      image: project2,
      techStack: "HTML, CSS, Tailwind CSS, DaisyUI",
      description:
        "An architect-based website showcasing many architect-related blogs.",
      liveLink:
        "https://asifahmed1810.github.io/programming-hero-assignment-3/",
      githubLink:
        "https://github.com/asifahmed1810/programming-hero-assignment-3",
      challenges: "Ensuring responsiveness on all devices.",
      improvements: "Adding a blog section and integrating a dark mode toggle.",
    },
    {
      id: 7,
      name: "Fitness Application",
      image: project3,
      techStack: "HTML, CSS, Tailwind CSS, DaisyUI",
      description: "It is a demo gym website.",
      liveLink:
        "https://asifahmed1810.github.io/programming-hero-assignment--2/",
      githubLink:
        "https://github.com/asifahmed1810/programming-hero-assignment--2",
      challenges: "Ensuring responsiveness on all devices.",
      improvements: "Adding more user functionalities.",
    },
  ];

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
