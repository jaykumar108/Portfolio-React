// Extended Projects data with more details
export const projectsData = [
    {
        id: 1,
        title: "E-Learning Platform",
        shortDescription: "Interactive online learning platform for accessible education",
        fullDescription: "E-Learning Website is an interactive online learning platform designed to make education accessible, engaging, and effective for everyone. It features course management, video lectures, quizzes, progress tracking, and a modern user interface.",
        image: "https://res.cloudinary.com/dzgr4iqt7/image/upload/v1764435809/elearning_b8iuys.png",
        category: "Full Stack",
        technologies: [
            { name: "HTML5", color: "blue" },
            { name: "CSS3", color: "blue" },
            { name: "JavaScript", color: "yellow" },
            { name: "Node.js", color: "green" },
            { name: "MongoDB", color: "teal" }
        ],
        features: [
            "User authentication and authorization",
            "Course creation and management",
            "Video streaming integration",
            "Interactive quizzes and assessments",
            "Progress tracking dashboard",
            "Real-time notifications"
        ],
        liveUrl: "https://elearning-web-com.onrender.com/home",
        githubUrl: "#",
        year: "2024"
    },
    {
        id: 2,
        title: "Career Portal",
        shortDescription: "Job application and management portal",
        fullDescription: "A comprehensive career portal where users can apply for jobs and administrators can manage job applications through an intuitive dashboard. Features include job posting, application tracking, and candidate management.",
        image: "https://res.cloudinary.com/dzgr4iqt7/image/upload/v1764435701/careerportal_htnae2.png",
        category: "Full Stack",
        technologies: [
            { name: "React.js", color: "blue" },
            { name: "Tailwind CSS", color: "cyan" },
            { name: "Node.js", color: "green" },
            { name: "Express.js", color: "red" },
            { name: "MongoDB", color: "teal" }
        ],
        features: [
            "Job search and filtering",
            "Application submission system",
            "Admin dashboard for job management",
            "Candidate profile management",
            "Application status tracking",
            "Email notifications"
        ],
        liveUrl: "https://career-portal-project.vercel.app/",
        githubUrl: "#",
        year: "2024"
    },
    {
        id: 3,
        title: "VS Woodshop",
        shortDescription: "Modern landing page for woodshop products",
        fullDescription: "A modern, responsive landing page for woodshop products featuring a sleek design and seamless user experience. Showcases products with high-quality images and detailed descriptions.",
        image: "https://res.cloudinary.com/dzgr4iqt7/image/upload/v1764435701/vswoodshop_xeqskk.png",
        category: "Frontend",
        technologies: [
            { name: "React.js", color: "blue" },
            { name: "Tailwind CSS", color: "cyan" },
            { name: "Node.js", color: "green" },
            { name: "Express.js", color: "red" },
            { name: "Vercel", color: "indigo" }
        ],
        features: [
            "Responsive design",
            "Product showcase gallery",
            "Contact form integration",
            "SEO optimized",
            "Fast page loading",
            "Mobile-first approach"
        ],
        liveUrl: "https://vswoodshop.vercel.app/",
        githubUrl: null,
        year: "2024"
    }
];

// Categories for filtering
export const categories = ["All", "Full Stack", "Frontend", "Backend"];
