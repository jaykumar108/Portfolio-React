import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaTwitter, FaLinkedin, FaBehance, FaEye, FaBars, FaTimes, FaInstagram, FaGithub, FaVoicemail, FaMailchimp, FaMailBulk, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import Button from "../components/Button";
import ModernNavbar from "../components/ModernNavbar";
import Skills from "../components/Skills";
import ToggleButton from "../components/ToggleButton";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import emailjs from "emailjs-com";

// Add custom CSS for typing animation
const typingStyles = `
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #3b82f6; }
  }
  
  .typing-animation {
    overflow: hidden;
    border-right: 3px solid #3b82f6;
    white-space: nowrap;
    animation: typing 3s steps(20, end), blink-caret 0.75s step-end infinite;
    animation-fill-mode: forwards;
  }
`;

// Social media links data
const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />,
    imageUrl: "", //  custom image URL
    link: "https://www.linkedin.com/in/jay-kumar-sharma-96112b25a/"
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />,
    imageUrl: "", //  custom image URL
    link: "https://github.com/jaykumar108/"
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />,
    imageUrl: "", //  custom image URL
    link: "https://instagram.com/jay_kumar_sharma_/"
  },
  {
    id: 4,
    name: "Email",
    icon: <FaVoicemail className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />,
    imageUrl: "https://img.icons8.com/?size=100&id=63&format=png&color=000000", // Optional custom image URL
    link: "mailto:jaykumarsh2003@gmail.com"
  }
];

// Footer Social media links with custom styling
const footerSocialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin className="text-2xl text-white hover:text-blue-400 cursor-pointer transition-colors" />,
    imageUrl: "", //  custom image URL
    link: "https://www.linkedin.com/in/jay-kumar-sharma-96112b25a/"
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub className="text-2xl text-white hover:text-blue-400 cursor-pointer transition-colors" />,
    imageUrl: "", //  custom image URL
    link: "https://github.com/jaykumar108/"
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="text-2xl text-white hover:text-blue-400 cursor-pointer transition-colors" />,
    imageUrl: "", //  custom image URL
    link: "https://www.instagram.com/jay_kumar_sharma_/"
  },
  {
    id: 4,
    name: "Email",
    icon: <FaVoicemail className="text-2xl text-white hover:text-blue-400 cursor-pointer transition-colors" />,
    imageUrl: "https://img.icons8.com/?size=100&id=63&format=png&color=000000", // Optional custom image URL
    link: "mailto:jaykumarsh2003@gmail.com"
  }
];

// Social Media Link Component
const SocialLink = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>
      {item.imageUrl ? (
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors"
        />
      ) : (
        item.icon
      )}
    </a>
  );
};

// Footer Social Media Link Component with custom styling
const FooterSocialLink = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>
      {item.imageUrl ? (
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-6 h-6 filter brightness-0 invert hover:brightness-125 cursor-pointer transition-all"
        />
      ) : (
        item.icon
      )}
    </a>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const errors = {};
    if (!formData.user_name || !formData.user_name.trim()) {
      errors.user_name = "Name is required";
    }
    if (!formData.user_email || !formData.user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.message || !formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    setErrorMessage("");

    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the data using EmailJS
      setIsLoading(true);

      // Use EmailJS to send the email
      emailjs.send(
        'service_68z5qmg', // Service ID
        'template_wej4gp9', // Template ID
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          phone: formData.phone,
          message: formData.message,
          time: new Date().toLocaleString() // Adding current time
        }
      )
        .then((response) => {
          console.log('Email sent successfully!', response);
          setIsSubmitted(true);
          setShowThankYou(true);
          
          // Reset form data
          setFormData({
            user_name: "",
            user_email: "",
            phone: "",
            message: ""
          });

          // Hide thank you message after 5 seconds
          setTimeout(() => {
            setShowThankYou(false);
          }, 5000);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setErrorMessage("Failed to send email. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
      {showThankYou && (
        <div className="mb-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-4 py-3 rounded relative animate-fade-in-down" role="alert">
          <strong className="font-bold">Thank You For Contacting! </strong>
          <span className="block sm:inline">I will contact you shortly.</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded relative animate-fade-in-down" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="user_name" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Your Name*</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.user_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Enter Your Name"
              disabled={isLoading}
            />
            {formErrors.user_name && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.user_name}</p>}
          </div>
          
          <div>
            <label htmlFor="user_email" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Your Email*</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.user_email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Enter Your Email"
              disabled={isLoading}
            />
            {formErrors.user_email && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.user_email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="+91 1234567890"
              disabled={isLoading}
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Your message here..."
              disabled={isLoading}
            ></textarea>
            {formErrors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.message}</p>}
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <button 
            type="submit" 
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  const handleNavigateToServices = () => {
    navigate('/services');
  };

  const handleNavigateToContact = () => {
    // Scroll to contact section on the same page
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToProject = () => {
    // Scroll to project section on the same page
    const projectSection = document.getElementById('project-section');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToTools = () => {
    navigate('/tools');
  };

  // Services data for hover effect
  const servicesData = [
    {
      title: "Web Development",
      description: "Custom websites built with the latest technologies to deliver exceptional user experiences. Specializing in React, Node.js, and modern web frameworks.",
      link: "#"
    },
    {
      title: "WordPress Development", 
      description: "We specialize in custom WordPress development, creating powerful, scalable, and easy-to-manage websites with custom themes and plugins.",
      link: "#"
    },
    {
      title: "Graphic Design",
      description: "Our graphic design services help brands stand out with professional and creative designs including logos, banners, and marketing materials.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Jay Kumar Sharma - Web Developer | Portfolio</title>
        <meta name="title" content="Jay Kumar Sharma - Web Developer | Portfolio" />
        <meta name="description" content="Jay Kumar Sharma is a passionate Web Developer specializing in React, Node.js, and modern web technologies. View my portfolio of projects and services." />
        <meta name="keywords" content="jay kumar sharma, jay sharma, jai sharma, jay kumar sharma web developer, jay kumar sharma react developer, jay kumar sharma node.js developer, jay kumar sharma frontend developer, jay kumar sharma full stack developer, jay kumar sharma portfolio, jay kumar sharma web development, jay kumar sharma javascript, jay kumar sharma react, jay kumar sharma node.js, jay kumar sharma mongodb, jay kumar sharma express.js, jay kumar shrma tailwind css, jay kumar sharma mern stack, jay kumar sharma india, jay kumar sharma darbhanga, jay kumar sharma bihar, jay kumar sharma freelance developer, jay kumar sharma remote developer, jay kumar sharma professional developer, jay kumar sharma projects, jay kumar sharma skills, jay kumar sharma expertise, jay kumar sharma wordpress developer, jay kumar sharma graphic designer, jay kumar sharma canva designer, jay kumar sharma excel expert, jay kumar sharma responsive design, jay kumar sharma ui/ux designer, jay kumar sharma api development, jay kumar sharma database design, jay kumar sharma cloud integration, jay kumar sharma custom website development, jay kumar sharma web application development, jay kumar sharma portfolio development, jay kumar sharma cms development, jay kumar sharma social media design, jay kumar sharma logo design, jay kumar sharma template design, jay kumar sharma card design, jay kumar sharma professional services, jay kumar sharma development company, jay kumar sharma tech solutions" />
        <meta name="author" content="Jay Kumar Sharma" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaysharma.space/" />
        <meta property="og:title" content="Jay Kumar Sharma - Web Developer | Portfolio" />
        <meta property="og:description" content="Jay Kumar Sharma is a passionate Web Developer specializing in React, Node.js, and modern web technologies. View my portfolio of projects and services." />
        <meta property="og:image" content="/Profile.png" />
        <meta property="og:site_name" content="Jay Kumar Sharma Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jaysharma.space/" />
        <meta property="twitter:title" content="Jay Kumar Sharma - Web Developer | Portfolio" />
        <meta property="twitter:description" content="Jay Kumar Sharma is a passionate Web Developer specializing in React, Node.js, and modern web technologies. View my portfolio of projects and services." />
        <meta property="twitter:image" content="/Profile.png" />
        <meta name="twitter:creator" content="@jay_kumar_sharma_" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Jay Kumar Sharma" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://jaysharma.space/" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        
        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jay Kumar Sharma",
              "alternateName": ["Jai Sharma", "Jay Sharma"],
              "jobTitle": "Web Developer",
              "description": "Passionate Web Developer specializing in React, Node.js, and modern web technologies",
              "url": "https://jaysharma.space/",
              "image": "/Profile.png",
              "sameAs": [
                "https://www.linkedin.com/in/jaykumar108/",
                "https://github.com/jaykumar108/",
                "https://instagram.com/jay_kumar_sharma_/"

              ],
              "knowsAbout": [
                "Web Development",
                "React.js",
                "Node.js",
                "JavaScript",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
                "WordPress Development",
                "Graphic Design"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Darbhanga",
                "addressRegion": "Bihar",
                "addressCountry": "India"
              },
              "email": "jaykumarsh2003@gmail.com",
              "telephone": "+91",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Web Developer"
              }
            }
          `}
        </script>
      </Helmet>
      
      <style dangerouslySetInnerHTML={{ __html: typingStyles }} />
      {/* Navbar */}
      <ModernNavbar 
        onHomeClick={() => navigate('/')} 
        onAboutClick={handleNavigateToAbout}
        onServiceClick={handleNavigateToServices}
        onContactClick={handleNavigateToContact}
        onProjectClick={handleNavigateToProject}
        onToolsClick={handleNavigateToTools}
        currentPage="home" 
      />

      {/* Main Content - Add top padding to account for fixed navbar */}
      <main className="flex-grow pt-24 md:pt-32">
        {/* middle Section */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Profile Image with 3D Card Effect - Always first on mobile, right on desktop */}
            <div className="w-full md:w-auto flex justify-center md:justify-end md:order-2">
              <CardContainer className="py-0" containerClassName="py-0">
                <CardBody className="h-auto w-auto">
                  <CardItem
                    translateX={0}
                    translateY={0}
                    translateZ={50}
                    rotateX={0}
                    rotateY={0}
                    rotateZ={0}
                    className="relative"
                  >
                    <div className="relative">
                      <img
                        src="/Profile.png" 
                        alt="Jay Sharma" 
                        className="rounded-full shadow-xl w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white"
                      />
                      <CardItem
                        translateX={-20}
                        translateY={-10}
                        translateZ={80}
                        rotateX={0}
                        rotateY={0}
                        rotateZ={0}
                        className="absolute top-4 left-0 md:left-[-20px]"
                      >
                        <img
                          src="https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=000000" 
                          alt="React Icon"
                          className="w-8 md:w-12 animate-bounce"
                        />
                      </CardItem>
                      <CardItem
                        translateX={20}
                        translateY={-10}
                        translateZ={80}
                        rotateX={0}
                        rotateY={0}
                        rotateZ={0}
                        className="absolute top-4 right-0 md:right-[-20px]"
                      >
                        <img
                          src="https://img.icons8.com/?size=100&id=23028&format=png&color=000000" 
                          alt="HTML Icon"
                          className="w-8 md:w-12 animate-bounce"
                        />
                      </CardItem>
                      <CardItem
                        translateX={0}
                        translateY={20}
                        translateZ={80}
                        rotateX={0}
                        rotateY={0}
                        rotateZ={0}
                        className="absolute bottom-[-10px] md:bottom-[-20px] left-1/2 transform -translate-x-1/2"
                      >
                        <img
                          src="https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=000000" 
                          alt="Tailwind Icon"
                          className="w-8 md:w-12 animate-bounce"
                        />
                      </CardItem>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            {/* name Content - Always second on mobile, left on desktop */}
            <div className="w-full md:w-auto text-center md:text-left md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mt-2 typing-animation duration-200">Jay Kumar Sharma</h1>
              <p className="text-lg mt-2">
                <span className="text-blue-500 dark:text-blue-400 font-semibold ">Web Developer</span>
                <span className="text-teal-600 dark:text-teal-400 font-semibold"> </span>
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl md:max-w-none text-center md:text-left">
              I am a passionate Web Developer with a keen eye for creating user-friendly, responsive, and visually appealing websites.
              </p>
              
              {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                {/* View Resume Button */}
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <FaEye className="text-white cursor-pointer" />
                  <span>View Resume</span>
                </button>

                {/* About Me Button */}
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg" onClick={handleNavigateToAbout}>
                  About Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 mt-8">
                {socialLinks.map((item) => (
                  <SocialLink key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="py-16 bg-gray-50 mt-6 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Introduce About Myself</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Hello! I am Jay Kumar Sharma, a dedicated Web Developer with a passion for building interactive and user-friendly websites. I enjoy crafting digital experiences that are both visually appealing and highly functional. My focus is on creating seamless, efficient, and engaging web solutions that enhance user experience.
               </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I am always eager to learn, grow, and take on new challenges in the ever-evolving world of web development. With a problem-solving mindset and a creative approach.
                </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Offering cutting-edge web development services to help your business thrive in the digital landscape.</p>
          </div>
          
          <HoverEffect items={servicesData} className="max-w-5xl mx-auto" />

          <div className="text-center mt-12">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              onClick={handleNavigateToServices}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="project-section" className="py-16 bg-gray-50 dark:bg-gray-800">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Check out some of my recent works and personal projects.</p>
    </div>
    
    <div className="flex flex-wrap justify-center gap-10">
      {/* Project 1 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-1/2 lg:w-1/3">
        <div className="h-48 sm:h-56 overflow-hidden">
          <img 
            src="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//Screenshot%202025-03-21%20003001.png" 
            alt="E-Learning" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">E-Learning</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">E-Learning Website is an interactive online learning platform designed to make education accessible, engaging, and effective for everyone</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">HTML, CSS, JavaScript</span>
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-semibold">Node.js</span>
            <span className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-full text-xs font-semibold">MonogoDB</span>
          </div>
          <div className="flex justify-between items-center">
            <a href="https://elearning-web-com.onrender.com/home" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              <FaExternalLinkAlt className="text-sm" />
              <span className="text-sm font-medium">View Project</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              <FaGithub className="text-sm" />
              <span className="text-sm font-medium">Source Code</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Project 2 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-1/2 lg:w-1/3">
        <div className="h-48 sm:h-56 overflow-hidden">
          <img 
            src="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//carrer.png" 
            alt="Career Portal" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Career Portal</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4"> Users apply for job using this and Admin can Manage Job Applications on Admin Dashboard.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">React js, Tailwind CSS</span>
            <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded-full text-xs font-semibold">Node js, Express js</span>
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full text-xs font-semibold">MongoDB</span>
          </div>
          <div className="flex justify-between items-center">
            <a href="https://career-portal-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              <FaExternalLinkAlt className="text-sm" />
              <span className="text-sm font-medium">View Project</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              <FaGithub className="text-sm" />
              <span className="text-sm font-medium">Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <Button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg">
        View All Projects
      </Button>
    </div>
  </div>

</section>

      {/* Contact Us Section */}
      <section id="contact-section" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Feel free to reach out for collaborations, questions, or just to say hello!</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-20">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 backdrop-blur-sm py-10 border text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Jay Kumar Sharma</h3>
              <div className="flex items-center space-x-3">
                <img src="https://img.icons8.com/?size=100&id=JeO1Kv9jsmLr&format=png&color=000000" alt="Mail Icon" className="w-6 h-6 md:w-8 md:h-8"/>
                <p className="text-gray-600 font-semibold text-white">jaykumarsh2003@gmail.com</p>
              </div>

              <div className="flex space-x-4 text-white">
                {footerSocialLinks.map((item) => (  
                  <FooterSocialLink key={item.id} item={item} />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-blue-400 cursor-pointer text-white">Graphic Design , WordPress </li>
                <li className="hover:text-blue-400 cursor-pointer text-white">Web Development</li>
   
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Important Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-blue-400 cursor-pointer text-white" onClick={handleNavigateToAbout}>About Me</li>
                <li className="hover:text-blue-400 cursor-pointer text-white" onClick={handleNavigateToServices}>Services</li>
                <li className="hover:text-blue-400 cursor-pointer text-white" onClick={handleNavigateToContact}>Contact</li>
                <li className="hover:text-blue-400 cursor-pointer text-white" onClick={handleNavigateToProject}>Projects</li>

              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-600 text-white">
                <li>Darbhanga, Bihar india</li>
               
                <li>+91     </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-4 pt-2 text-center text-white">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Toggle Button */}
      <ToggleButton 
        onHomeClick={() => navigate('/')} 
        onAboutClick={handleNavigateToAbout}
        onServiceClick={handleNavigateToServices}
        onContactClick={handleNavigateToContact}
        onProjectClick={handleNavigateToProject}
        onToolsClick={handleNavigateToTools}
      />
    </div>
  );
};

export default Portfolio;
