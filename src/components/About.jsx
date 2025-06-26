import React, { useEffect } from 'react';
import { FaCode, FaLaptopCode, FaUserGraduate, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from './Button';
import Navbar from './Navbar';
import ToggleButton from './ToggleButton';

const About = ({ onHomeClick, onServiceClick, onContactClick }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      id: 5,
      title: "Advanced Excel Training",
      issuer: "STP Computer Education",
      year: "2024", 
      link: "https://drive.google.com/file/d/1s1ucXdXogQuUttDL267ha6JpstIVKpzO/view?usp=sharing"
    },{
      id: 5,
      title: "HTML, CSS Workshop 5 Days",
      issuer: "Lets Upgrade",
      year: "2024", 
      link: "https://drive.google.com/file/d/1pZiWhIDVvsXSMxVPnZAoSW4q9bKG287b/view?usp=sharing"
    }

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar 
        onHomeClick={onHomeClick} 
        onAboutClick={() => {}} 
        onServiceClick={onServiceClick}
        onContactClick={onContactClick}
        currentPage="about" 
      />
      
      {/* Hero Section - Add top padding to account for fixed navbar */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-28 bg-gray-50">
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
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.div 
                className="w-20 h-1 bg-orange-500 mb-6"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              ></motion.div>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Hello! I'm Jay Kumar Sharma, a passionate web developer with expertise in modern frontend and backend technologies. I love creating beautiful, functional, and user-friendly websites.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
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
                  className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                  onClick={onContactClick}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Profile Image */}
            <motion.div 
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-orange-500 rounded-lg transform rotate-6"
                  animate={{ rotate: [6, 8, 6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.img
                  src="/Profile.png" 
                  alt="Jay Kumar Sharma" 
                  className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Personal Information</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About Me</h3>
              <p className="text-gray-600 mb-4">
                I am a dedicated and enthusiastic web developer with a passion for creating responsive and user-friendly websites. I have a strong understanding of frontend technologies.
              </p>
              <p className="text-gray-600">
              With hands-on experience in web development, I specialize in creating visually appealing, responsive, and user-friendly interfaces. 
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Expertise</h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-orange-100 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaCode className="text-orange-500 text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Frontend Development</h4>
                    <p className="text-gray-600">Creating responsive and interactive websites using modern technologies like React, HTML5, CSS3, and JavaScript.</p>
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
                    className="bg-orange-100 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaLaptopCode className="text-orange-500 text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Backend Development</h4>
                    <p className="text-gray-600">Building robust server-side applications using Node.js, Express, and MongoDB.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
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
                  className="bg-orange-100 p-4 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaUserGraduate className="text-orange-500 text-2xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </motion.div>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    className="border-l-4 border-orange-500 pl-6 py-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900">{item.degree}</h4>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600">{item.institution}</p>
                        <p className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">{item.year}</p>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
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
                  className="bg-orange-100 p-4 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLaptopCode className="text-orange-500 text-2xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
              </motion.div>
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    className="border-l-4 border-orange-500 pl-6 py-2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900">{item.position}</h4>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600">{item.company}</p>
                        <p className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">{item.year}</p>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
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
                    className="bg-orange-100 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaCertificate className="text-orange-500 text-xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                </motion.div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">{cert.year}</p>
                </div>             
                <motion.a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-2 text-sm mt-2"
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
        onHomeClick={onHomeClick} 
        onAboutClick={() => {}} 
        onServiceClick={onServiceClick}
        onContactClick={onContactClick}
      />
    </div>
  );
};

export default About; 