import React from 'react';
import { FaCode, FaLaptopCode, FaUserGraduate, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import Button from './Button';
import Navbar from './Navbar';

const About = ({ onHomeClick, onServiceClick, onContactClick }) => {
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
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hello! I'm Jay Kumar Sharma, a passionate web developer with expertise in modern frontend and backend technologies. I love creating beautiful, functional, and user-friendly websites.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                
                
              {/* add text */}
              With hands-on experience in web development, I specialize in creating visually appealing, responsive, and user-friendly interfaces. I have a keen eye for design and a deep understanding of Tailwind CSS to build modern and efficient web applications.


              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Download CV
                </Button>
                <Button 
                  className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                  onClick={onContactClick}
                >
                  Contact Me
                </Button>
              </div>
            </div>
            
            {/* Right Content - Profile Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-orange-500 rounded-lg transform rotate-6"></div>
                <img
                  src="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile.png" 
                  alt="Jay Kumar Sharma" 
                  className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Personal Information</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About Me</h3>
              <p className="text-gray-600 mb-4">
                I am a dedicated and enthusiastic web developer with a passion for creating responsive and user-friendly websites. I have a strong understanding of frontend technologies.
              </p>
              <p className="text-gray-600">
              With hands-on experience in web development, I specialize in creating visually appealing, responsive, and user-friendly interfaces. 
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaCode className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Frontend Development</h4>
                    <p className="text-gray-600">Creating responsive and interactive websites using modern technologies like React, HTML5, CSS3, and JavaScript.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaLaptopCode className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Backend Development</h4>
                    <p className="text-gray-600">Building robust server-side applications using Node.js, Express, and MongoDB.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaUserGraduate className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map(item => (
                  <div key={item.id} className="border-l-4 border-orange-500 pl-6 py-2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-gray-900">{item.degree}</h4>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600">{item.institution}</p>
                        <p className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">{item.year}</p>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaLaptopCode className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experience.map(item => (
                  <div key={item.id} className="border-l-4 border-orange-500 pl-6 py-2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-gray-900">{item.position}</h4>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600">{item.company}</p>
                        <p className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">{item.year}</p>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map(cert => (
              <div key={cert.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaCertificate className="text-orange-500 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">{cert.year}</p>
                </div>             
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-2 text-sm mt-2"
                >
                  View Certificate <FaExternalLinkAlt />
                </a>
              </div>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <Button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
              View All Certificates
            </Button>
          </div> */}
        
        </div>

      </section>
    </div>
  );
};

export default About; 