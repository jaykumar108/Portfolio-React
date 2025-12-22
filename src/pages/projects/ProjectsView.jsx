import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaExternalLinkAlt, FaGithub, FaFilter } from "react-icons/fa";
import ModernNavbar from "../../components/ModernNavbar";
import ToggleButton from "../../components/ToggleButton";
import { projectsData, categories } from "./projectsData";

const ProjectsView = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    // Navigation handlers
    const handleNavigateToAbout = () => navigate('/about');
    const handleNavigateToServices = () => navigate('/services');
    const handleNavigateToContact = () => navigate('/contact');
    const handleNavigateToHome = () => navigate('/');
    const handleNavigateToTools = () => navigate('/tools');

    // Get color classes for technology badges
    const getColorClasses = (color) => {
        const colorMap = {
            blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
            yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
            teal: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
            red: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
            indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300",
            green: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
            cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300"
        };
        return colorMap[color] || colorMap.blue;
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
            <Helmet>
                {/* Primary Meta Tags */}
                <title>Projects - Jay Kumar Sharma | Web Development Portfolio</title>
                <meta name="title" content="Projects - Jay Kumar Sharma | Web Development Portfolio" />
                <meta name="description" content="Explore Jay Kumar Sharma's portfolio of web development projects including E-Learning Platform, Career Portal, and more. Full-stack applications built with React, Node.js, MongoDB, and modern technologies." />
                <meta name="keywords" content="jay kumar sharma projects, jay sharma projects, jai kumar sharma, jaykumar sharma, jaysharma portfolio, jaysharma profile, jaisharma, jay kumar sharma web developer, jay sharma portfolio, jay kumar sharma full stack projects, jay kumar sharma react projects, jay kumar sharma node.js projects, jay kumar sharma mern stack, jay kumar sharma e-learning, jay kumar sharma career portal, web development portfolio, react projects, node.js projects, full stack projects, mern stack developer, javascript projects, mongodb projects, portfolio website, jay kumar sharma github, jay kumar sharma portfolio website" />
                <meta name="author" content="Jay Kumar Sharma" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jaysharma.space/projects" />
                <meta property="og:title" content="Projects - Jay Kumar Sharma | Web Development Portfolio" />
                <meta property="og:description" content="Explore Jay Kumar Sharma's portfolio of web development projects including E-Learning Platform, Career Portal, VS Woodshop and more. Full-stack applications built with React, Node.js, and modern technologies." />
                <meta property="og:image" content="/Profile.png" />
                <meta property="og:site_name" content="Jay Kumar Sharma Portfolio" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://jaysharma.space/projects" />
                <meta property="twitter:title" content="Projects - Jay Kumar Sharma | Web Development Portfolio" />
                <meta property="twitter:description" content="Explore Jay Kumar Sharma's portfolio of web development projects. Full-stack applications built with React, Node.js, and modern technologies." />
                <meta property="twitter:image" content="/Profile.png" />
                <meta name="twitter:creator" content="@jay_kumar_sharma_" />

                {/* Additional SEO Meta Tags */}
                <meta name="theme-color" content="#3b82f6" />
                <meta name="msapplication-TileColor" content="#3b82f6" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Jay Kumar Sharma Projects" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://jaysharma.space/projects" />

                {/* Structured Data / JSON-LD */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "Projects - Jay Kumar Sharma",
                            "description": "Portfolio of web development projects by Jay Kumar Sharma including full-stack applications, frontend designs, and modern web solutions",
                            "url": "https://jaysharma.space/projects",
                            "author": {
                                "@type": "Person",
                                "name": "Jay Kumar Sharma",
                                "alternateName": ["Jay Sharma", "Jai Kumar Sharma", "JayKumar Sharma", "Jai Sharma"],
                                "jobTitle": "Full Stack Web Developer",
                                "url": "https://jaysharma.space/",
                                "sameAs": [
                                    "https://www.linkedin.com/in/jaykumar108/",
                                    "https://github.com/jaykumar108/",
                                    "https://instagram.com/jay_kumar_sharma_/",
                                    "https://x.com/Jay_kumar__",
                                    "https://peerlist.io/jaykumar108"
                                ]
                            },
                            "mainEntity": {
                                "@type": "ItemList",
                                "itemListElement": [
                                    {
                                        "@type": "CreativeWork",
                                        "position": 1,
                                        "name": "E-Learning Platform",
                                        "description": "Interactive online learning platform designed to make education accessible, engaging, and effective",
                                        "url": "https://elearning-web-com.onrender.com/home"
                                    },
                                    {
                                        "@type": "CreativeWork",
                                        "position": 2,
                                        "name": "Career Portal",
                                        "description": "Comprehensive career portal for job applications and management",
                                        "url": "https://career-portal-project.vercel.app/"
                                    },
                                    {
                                        "@type": "CreativeWork",
                                        "position": 3,
                                        "name": "VS Woodshop",
                                        "description": "Modern landing page for woodshop products with sleek design",
                                        "url": "https://vswoodshop.vercel.app/"
                                    }
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            {/* Navbar */}
            <ModernNavbar
                onHomeClick={handleNavigateToHome}
                onAboutClick={handleNavigateToAbout}
                onServiceClick={handleNavigateToServices}
                onContactClick={handleNavigateToContact}
                onProjectClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onToolsClick={handleNavigateToTools}
                currentPage="projects"
            />

            {/* Main Content */}
            <main className="flex-grow pt-24 md:pt-32 pb-16">
                <div className="container mx-auto px-6">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            My Projects
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Explore my portfolio of web development projects. Each project represents my passion for creating
                            innovative, user-friendly solutions using modern technologies.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaFilter className="text-blue-500" />
                            <span className="font-semibold">Filter:</span>
                        </div>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg"
                                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Project Image */}
                                <div className="h-56 overflow-hidden relative group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="w-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-white dark:hover:bg-gray-700 transition-colors"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {project.year}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                        {project.shortDescription}
                                    </p>

                                    {/* Technology Badges */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className={`${getColorClasses(tech.color)} px-2 py-1 rounded-full text-xs font-semibold`}
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <FaExternalLinkAlt className="text-sm" />
                                            <span className="text-sm font-medium">Live Demo</span>
                                        </a>
                                        {project.githubUrl && project.githubUrl !== "#" && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                                            >
                                                <FaGithub className="text-sm" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Projects Found */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {selectedProject.title}
                            </h2>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
                            >
                                ×
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            {/* Project Image */}
                            <div className="rounded-lg overflow-hidden mb-6">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Project Details */}
                            <div className="space-y-6">
                                {/* Description */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        About This Project
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {selectedProject.fullDescription}
                                    </p>
                                </div>

                                {/* Technologies Used */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className={`${getColorClasses(tech.color)} px-3 py-2 rounded-lg text-sm font-semibold`}
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedProject.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                                            >
                                                <span className="text-blue-500 mt-1">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                                    >
                                        <FaExternalLinkAlt />
                                        <span>View Live Project</span>
                                    </a>
                                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                                        <a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                                        >
                                            <FaGithub />
                                            <span>Source Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <ToggleButton
                onHomeClick={handleNavigateToHome}
                onAboutClick={handleNavigateToAbout}
                onServiceClick={handleNavigateToServices}
                onContactClick={handleNavigateToContact}
                onProjectClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onToolsClick={handleNavigateToTools}
            />
        </div>
    );
};

export default ProjectsView;
