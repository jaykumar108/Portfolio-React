import React from 'react';
import { 
  FaCode, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaDatabase, 
  FaServer, 
  FaShieldAlt,
  FaSearch,
  FaPalette 
} from 'react-icons/fa';
import Button from './Button';
import Navbar from './Navbar';

const Service = ({ onHomeClick, onAboutClick, onContactClick }) => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Websites built with the latest technologies to deliver exceptional user experiences.",
      icon: <FaCode className="text-3xl text-orange-500" />,
      features: [
        "Responsive design for all devices",
        "Modern JavaScript frameworks (React)",
        "Responsive UI ",
        "Portfolio Making"
      ]
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "design that enhances the user experience and increases engagement.",
      icon: <FaMobileAlt className="text-3xl text-orange-500" />,
      features: [
        "Card Design",
        "Social Media Post Design",
        "Template Design",
        "Logo Design"
      ]
    },
    // {
    //   id: 3,
    //   title: "UI/UX Design",
    //   description: "User-centered design that enhances the user experience and increases engagement.",
    //   icon: <FaPalette className="text-3xl text-orange-500" />,
    //   features: [
    //     "Wireframing & prototyping",
    //     "User research & testing",
    //     "Interactive designs",
    //     "Conversion-focused layouts"
    //   ]
    // },
    {
      id: 4,
      title: "Backend Development",
      description: "Powerful and secure server-side solutions for your web applications. ",
      icon: <FaServer className="text-3xl text-orange-500" />,
      features: [
        "API development",
        "Node.js & Express",
        "Authentication systems",
        "Cloud integration (Cloudinary, Supabase)"
      ]
    },
    // {
    //   id: 5,
    //   title: "Database Management",
    //   description: "Efficient data storage solutions with secure and scalable database architectures.",
    //   icon: <FaDatabase className="text-3xl text-orange-500" />,
    //   features: [
    //     "SQL & NoSQL database design",
    //     "Data modeling & optimization",
    //     "Migration & scaling strategies",
    //     "Data security & backup systems"
    //   ]
    // },
    // {
    //   id: 6,
    //   title: "Web Security",
    //   description: "Implementing robust security measures to protect your website and user data.",
    //   icon: <FaShieldAlt className="text-3xl text-orange-500" />,
    //   features: [
    //     "Security audits & vulnerability testing",
    //     "SSL implementation",
    //     "GDPR compliance setup",
    //     "Secure authentication & authorization"
    //   ]
    // }
  ];

  // Process steps
  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description: "I start by understanding your business goals, target audience, and project requirements."
    },
    {
      id: 2,
      title: "Planning",
      description: "Creating a detailed project plan including timeline, milestones, and deliverables."
    },
    {
      id: 3,
      title: "Design",
      description: "Developing wireframes and visual designs for your approval before moving to development."
    },
    {
      id: 4,
      title: "Development",
      description: "Writing clean, efficient code to bring the designs to life with all required functionality."
    },
    {
      id: 5,
      title: "Testing",
      description: "Thorough testing across devices and browsers to ensure everything works perfectly."
    },
    {
      id: 6,
      title: "Launch",
      description: "Deploying your project to a live environment with careful monitoring for any issues."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar 
        onHomeClick={onHomeClick} 
        onAboutClick={onAboutClick}
        onServiceClick={() => {}}
        onContactClick={onContactClick}
        currentPage="service" 
      />
      
      {/* Hero Section - Add top padding to account for fixed navbar */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Services</h1>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I offer a wide range of web development services to help businesses establish a strong online presence.
              From designing beautiful user interfaces to developing robust backend systems, I can help turn your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-orange-50 p-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Button className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Process</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I follow a systematic approach to ensure every project is completed efficiently and meets the highest standards of quality.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map(step => (
                <div key={step.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Me</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaLaptopCode className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Expertise</h3>
              <p className="text-gray-600">
                With years of experience in web development, I have developed a strong foundation in both frontend and backend technologies. 
                I stay updated with the latest trends and best practices to deliver modern and efficient solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaSearch className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Attention to Detail</h3>
              <p className="text-gray-600">
                I believe that small details make a big difference. From pixel-perfect designs to optimized code, 
                I pay close attention to every aspect of your project to ensure the highest quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-8">
              Let's work together to create something amazing. Contact me today to discuss your project requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors" onClick={onContactClick}>
                Contact Me
              </Button>
              {/* <Button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
                View Portfolio
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service; 