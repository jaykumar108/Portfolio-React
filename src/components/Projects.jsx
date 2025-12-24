import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Button from "./Button";

// Projects data
const projectsData = [
  {
    id: 1,
    title: "Healthcare Website",
    description: "A modern healthcare website providing comprehensive medical services, appointment booking, and patient care information with an intuitive user interface.",
    image: "https://res.cloudinary.com/dzgr4iqt7/image/upload/v1766582351/helthcare_qjy501.png",
    technologies: [
      { name: "React js, Tailwind CSS", color: "blue" },
      { name: "Node.js", color: "yellow" },
      { name: "MongoDB", color: "teal" }
    ],
    liveUrl: "https://helthcare-webisite.vercel.app/",
    githubUrl: "#"
  },

  {
    id: 2,
    title: "VS Woodshop",
    description: "A modern Landing page for woodshop products, featuring a sleek design and seamless experience.",
    image: "https://res.cloudinary.com/dzgr4iqt7/image/upload/v1764435701/vswoodshop_xeqskk.png",
    technologies: [
      { name: "React js, Tailwind CSS", color: "blue" },
      { name: "Node.js, Express.js", color: "teal" },
      { name: "MongoDB, Vercel", color: "indigo" }
    ],
    liveUrl: "https://vswoodshop.vercel.app/",
    githubUrl: null
  },
  // {
  //   id: 3,
  //   title: "Career Portal",
  //   description: "Users apply for job using this and Admin can Manage Job Applications on Admin Dashboard.",
  //   image: "https://res.cloudinary.com/dzgr4iqt7/image/upload/v1764435701/careerportal_htnae2.png",
  //   technologies: [
  //     { name: "React js, Tailwind CSS", color: "blue" },
  //     { name: "Node js, Express js", color: "red" },
  //     { name: "MongoDB", color: "indigo" }
  //   ],
  //   liveUrl: "https://career-portal-project.vercel.app/",
  //   githubUrl: "#"
  // },
];

// Project Card Component
const ProjectCard = ({ project }) => {
  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
      teal: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
      red: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
      indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-1/2 lg:w-1/3">
      <div className="h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`${getColorClasses(tech.color)} px-2 py-1 rounded-full text-xs font-semibold`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className={`flex ${project.githubUrl && project.githubUrl !== "#" ? "justify-between" : "justify-center"} items-center`}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span className="text-sm font-medium">View Project</span>
          </a>
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaGithub className="text-sm" />
              <span className="text-sm font-medium">Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Projects Component
const Projects = ({ onViewAllClick }) => {
  return (
    <section id="project-section" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent works and personal projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
            onClick={onViewAllClick}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

