import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaUserGraduate, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from './Button';
import ModernNavbar from './ModernNavbar';
import ToggleButton from './ToggleButton';
import { CardSwipe } from './ui/card-swipe';

const About = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateToHome = () => {
    navigate('/');
  };

  const handleNavigateToServices = () => {
    navigate('/services');
  };

  const handleNavigateToContact = () => {
    navigate('/');
    // We need to wait for the component to render before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToProject = () => {
    navigate('/');
    // We need to wait for the component to render before scrolling
    setTimeout(() => {
      const projectSection = document.getElementById('project-section');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Profile images for CardSwipe
  const profileImages = [
    { src: "/Profile.png", alt: "Jay Sharma Profile 1" },
    { src: "/img.png", alt: "Jay Sharma Profile 2" },
    { src: "/img2.png", alt: "Jay Sharma Profile 3" },
  ];

  // Education data
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Sandip University Madhubani",
      year: "2021 - 2025",
      description: "Completed my bachelor's degree with a focus on Web development and software engineering."
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "J.N College, Madhubani",
      year: "2019 - 2021",
      description: "Completed my higher secondary education with a focus on science and mathematics."
    }
  ];

  // Experience data
  const experience = [
    {
      id: 1,
      position: "WordPress & CMS Trainee Engineer",
      company: "Mithila Stack Darbhanga",
      year: "March 2025 - Present",
      description: "Working on developing responsive web applications using WordPress."
    },
    {
      id: 2,
      position: "Web Development Intern",
      company: "PHN Technology Pvt. Ltd.",
      year: "June 2023 - August 2023",
      description: "Working on developing responsive web applications using HTML, CSS, and JavaScript technologies."
      
    }
  ];

  // Skills data
  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'React', icon: 'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' },
        { name: 'Next.js', icon: 'https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' },
        { name: 'TypeScript', icon: 'https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000' },
        { name: 'Tailwind CSS', icon: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' },
        // { name: 'Framer Motion', icon: 'https://img.icons8.com/?size=100&id=GRzLkhOFEp0z&format=png&color=000000' }
      ] 
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000' },
        { name: 'Express.js', icon: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' },
        { name: 'Python', icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000' },
        { name: 'MongoDB', icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
        // { name: 'PostgreSQL', icon: 'https://img.icons8.com/?size=100&id=LwQEs9KnDgIo&format=png&color=000000' }
      ] 
    },
    { 
      category: 'Mobile', 
      items: [
        { name: 'React Native', icon: 'https://img.icons8.com/?size=100&id=35989&format=png&color=000000' },
        // { name: 'Flutter', icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
        // { name: 'iOS', icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
        { name: 'Android', icon: 'https://img.icons8.com/?size=100&id=11138&format=png&color=000000' }
      ] 
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'Git', icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
        { name: 'GitHub', icon: 'https://img.icons8.com/?size=100&id=16318&format=png&color=000000' },
        // { name: 'Docker', icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000' },
        // { name: 'AWS', icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
        { name: 'VS Code', icon: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000' }
      ] 
    },
  ];

  // Certification data
  const certifications = [
    {
      id: 1,
      title: "Web Development Training",
      issuer: "Internshala",
      year: "2023",
      link: "https://drive.google.com/file/d/1l18kO8TZSRhcxy6rcghTefVpZnObA9Z8/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Soft Skills Training",
      issuer: "TCS iON",
      year: "2023",
      link: "https://drive.google.com/file/d/1gJuSmEQf6SCJsTKTq8JH1vcuIgpWytjR/view?usp=sharing"
    },
    {
      id: 3,
      title: "AI Tools Workshop",
      issuer: "be 10X",
      year: "2023",
      link: "https://drive.google.com/file/d/1nv632bnMQEs5dSK4TadXrCX3_M_a6IFD/view?usp=sharing"
    },
    {
      id: 4,
      title: "Email Marketing Training",
      issuer: "WsCube Tech",
      year: "2024",
      link: "https://drive.google.com/file/d/1RX8WpnWy6V09JayhWHyQD7fc3kWvqZLZ/view?usp=sharing"
    },
    {
      id: 6,
      title: "HTML, CSS Workshop 5 Days",
      issuer: "Lets Upgrade",
      year: "2024", 
      link: "https://drive.google.com/file/d/1pZiWhIDVvsXSMxVPnZAoSW4q9bKG287b/view?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Jay Kumar Sharma - Full Stack Developer | Education & Experience</title>
        <meta name="title" content="About Jay Kumar Sharma - Full Stack Developer | Education & Experience" />
        <meta name="description" content="Learn more about Jay Kumar Sharma, a passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies. View education, experience, and certifications." />
        <meta name="keywords" content="about jay kumar sharma, jay kumar sharma education, jay kumar sharma experience, jay kumar sharma certifications, jay kumar sharma background, jay kumar sharma developer, jay kumar sharma portfolio about, jay kumar sharma skills, jay kumar sharma qualifications, jay kumar sharma resume, jay kumar sharma developer profile, jay kumar sharma web developer about, jay kumar sharma mern stack developer, jay kumar sharma space about, jay kumar sharma b.tech, jay kumar sharma computer science, jay kumar sharma sandip university, jay kumar sharma madhubani, jay kumar sharma india, jay kumar sharma professional developer, jay kumar sharma career, jay kumar sharma work experience, jay kumar sharma internship, jay kumar sharma wordpress developer, jay kumar sharma cms developer, jay kumar sharma web development intern, jay kumar sharma phn technology, jay kumar sharma mithila stack, jay kumar sharma darbhanga" />
        <meta name="author" content="Jay Kumar Sharma" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />  
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaysharma.space/about" />
        <meta property="og:title" content="About Jay Kumar Sharma - Full Stack Developer | Education & Experience" />
        <meta property="og:description" content="Learn more about Jay Kumar Sharma, a passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies. View education, experience, and certifications." />
        <meta property="og:image" content="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="About Jay Kumar Sharma - Full Stack Developer" />
        <meta property="og:site_name" content="Jay Kumar Sharma Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jaysharma.space/about" />
        <meta property="twitter:title" content="About Jay Kumar Sharma - Full Stack Developer | Education & Experience" />
        <meta property="twitter:description" content="Learn more about Jay Kumar Sharma, a passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies." />
        <meta property="twitter:image" content="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png" />
        <meta property="twitter:image:alt" content="About Jay Kumar Sharma - Full Stack Developer" />
        <meta property="twitter:creator" content="@jaysharma" />
        <meta property="twitter:site" content="@jaysharma" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://jaysharma.space/about" />
        
        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jay Kumar Sharma",
          "jobTitle": "Full Stack Developer",
          "description": "Professional Full Stack Developer specializing in React, Node.js, and modern web technologies",
          "url": "https://jaysharma.space/about",
          "image": "https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png",
          "alternateName": ["Jay Sharma", "Portfolio Jay Kumar Sharma", "Jay Kumar Sharma Space"],
          "givenName": "Jay Kumar Sharma",
          "familyName": "Jay Kumar Sharma",
          "additionalName": "Jay Kumar Sharma",
          "gender": "Male",
          "nationality": "Indian",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "India"
          },
          
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Full Stack Developer",
            "occupationLocation": {
              "@type": "Place",
              "name": "India"
            }
          },
          
          "knowsAbout": [
            "React.js",
            "Node.js", 
            "JavaScript",
            "TypeScript",
            "MongoDB",
            "Express.js",
            "Full Stack Development",
            "Web Development",
            "WordPress",
            "CMS Development",
            "HTML",
            "CSS",
            "Responsive Design"
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Web Development Training",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Internshala"
              }
            },
            {
              "@type": "EducationalOccupationalCredential", 
              "credentialCategory": "Soft Skills Training",
              "recognizedBy": {
                "@type": "Organization",
                "name": "TCS iON"
              }
            }
          ],
          "sameAs": [
            "https://github.com/jaykumar108/",
            "https://linkedin.com/in/jaykumar108/",
            "https://x.com/Jay_kumar__",
            "https://peerlist.io/jaykumar108"
          ]
        }
        `}
        </script>
      </Helmet>
      
      {/* Navbar */}
      <ModernNavbar 
        onHomeClick={handleNavigateToHome} 
        onAboutClick={() => {}} 
        onServiceClick={handleNavigateToServices}
        onContactClick={handleNavigateToContact}
        onProjectClick={handleNavigateToProject}
        currentPage="about" 
      />
      
      {/* Hero Section - Add top padding to account for fixed navbar */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-28 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mb-6"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              ></motion.div>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Hello! I'm Jay Kumar Sharma, a passionate web developer with expertise in modern frontend and backend technologies. I love creating beautiful, functional, and user-friendly websites.
              </motion.p>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                With hands-on experience in web development, I specialize in creating visually appealing, responsive, and user-friendly interfaces. I have a keen eye for design and a deep understanding of Tailwind CSS to build modern and efficient web applications.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
                  onClick={handleNavigateToContact}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Profile Image CardSwipe */}
            <motion.div 
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg transform rotate-6"
                  animate={{ rotate: [6, 8, 6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <div className="relative z-10 w-full h-full">
                  <CardSwipe 
                    images={profileImages} 
                    autoplayDelay={3000} 
                    slideShadows={false} 
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Personal Information</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I am a dedicated and enthusiastic web developer with a passion for creating responsive and user-friendly websites. I have a strong understanding of frontend technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
              With hands-on experience in web development, I specialize in creating visually appealing, responsive, and user-friendly interfaces. 
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Expertise</h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-blue-100 to-teal-100 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaCode className="text-blue-500 text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Development</h4>
                    <p className="text-gray-600 dark:text-gray-300">Creating responsive and interactive websites using modern technologies like React, HTML5, CSS3, and JavaScript.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-blue-100 to-teal-100 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaLaptopCode className="text-blue-500 text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Backend Development</h4>
                    <p className="text-gray-600 dark:text-gray-300">Building robust server-side applications using Node.js, Express, and MongoDB.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I work with modern technologies and frameworks to build robust, scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 rounded-full px-3 py-2 flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-100 to-teal-100 p-4 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaUserGraduate className="text-blue-500 text-2xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </motion.div>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    className="border-l-4 border-blue-500 pl-6 py-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h4>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                        <p className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 text-blue-600 dark:text-blue-300 text-sm px-3 py-1 rounded-full">{item.year}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-100 to-teal-100 p-4 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLaptopCode className="text-blue-500 text-2xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </motion.div>
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    className="border-l-4 border-blue-500 pl-6 py-2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.position}</h4>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                        <p className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 text-blue-600 dark:text-blue-300 text-sm px-3 py-1 rounded-full">{item.year}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.id} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-blue-100 to-teal-100 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaCertificate className="text-blue-500 text-xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                </motion.div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  <p className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 text-blue-600 dark:text-blue-300 text-sm px-3 py-1 rounded-full">{cert.year}</p>
                </div>             
                <motion.a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2 text-sm mt-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Certificate <FaExternalLinkAlt />
                </motion.a>
              </motion.div>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <Button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
              View All Certificates
            </Button>
          </div> */}
        
        </div>

      </section>

      {/* Toggle Button */}
      <ToggleButton 
        onHomeClick={handleNavigateToHome} 
        onAboutClick={() => {}} 
        onServiceClick={handleNavigateToServices}
        onContactClick={handleNavigateToContact}
      />
    </div>
  );
};

export default About; 