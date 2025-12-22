import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaTwitter, FaLinkedin, FaBehance, FaEye, FaBars, FaTimes, FaInstagram, FaGithub, FaVoicemail, FaMailchimp, FaMailBulk, FaDownload, FaUpload } from "react-icons/fa";
import toast from "react-hot-toast";
import { sendContactForm } from "../services/contactus.service";
import Button from "../components/Button";
import ModernNavbar from "../components/ModernNavbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ToggleButton from "../components/ToggleButton";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import { Spinner } from "../components/ui/spinner";

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
    link: "https://www.linkedin.com/in/jaykumar108"
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
    link: "https://www.linkedin.com/in/jaykumar108"
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
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null
  });
  const [formErrors, setFormErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const validateForm = () => {
    const errors = {};
    if (!formData.name || !formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email || !formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message || !formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length > 600) {
      errors.message = "Message must be maximum 600 characters";
    }

    // Validate phone number (max 10 digits)
    if (formData.phone && formData.phone.trim()) {
      const phoneDigits = formData.phone.replace(/\D/g, ''); // Remove non-digits
      if (phoneDigits.length > 10) {
        errors.phone = "Phone number must be maximum 10 digits";
      }
    }

    // Validate file if uploaded
    if (formData.file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (formData.file.size > maxSize) {
        errors.file = "File size must be less than 5MB";
      }
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'file' && files && files.length > 0) {
      const file = files[0];
      setFormData({
        ...formData,
        file: file
      });
      setFileName(file.name);
    } else if (name === 'phone') {
      // Limit phone number to 10 digits (remove non-digits and limit length)
      const phoneDigits = value.replace(/\D/g, '').slice(0, 10);
      setFormData({
        ...formData,
        [name]: phoneDigits
      });
    } else if (name === 'name') {
      // Only allow letters, spaces, and common name characters (no numbers)
      const nameOnly = value.replace(/[^a-zA-Z\s.'-]/g, '');
      setFormData({
        ...formData,
        [name]: nameOnly
      });
    } else if (name === 'message') {
      // Limit message to 600 characters
      const limitedMessage = value.slice(0, 600);
      setFormData({
        ...formData,
        [name]: limitedMessage
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleRemoveFile = () => {
    setFormData({
      ...formData,
      file: null
    });
    setFileName("");
    // Reset file input
    const fileInput = document.getElementById('portfolio-file');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    setErrorMessage("");

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      setErrorMessage("");

      try {
        // Send contact form data to API
        await sendContactForm(formData);

        // Show success toast
        toast.success('Thank you for contacting! I will get back to you shortly.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#10b981',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '16px',
          },
        });

        // Show thank you message
        setShowThankYou(true);

        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          file: null
        });
        setFileName("");

        // Hide thank you message after 5 seconds
        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
      } catch (error) {
        console.error('Failed to send contact form:', error);
        const errorMsg = error.message || "Failed to send message. Please try again later.";
        setErrorMessage(errorMsg);

        // Show error toast
        toast.error(errorMsg, {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#ef4444',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '16px',
          },
        });
      } finally {
        setIsLoading(false);
      }
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
            <label htmlFor="portfolio-name" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Your Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="portfolio-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Your Name Here..."
              disabled={isLoading}
            />
            {formErrors.name && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.name}</p>}
          </div>

          <div>
            <label htmlFor="portfolio-email" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Your Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="portfolio-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Your Email Here..."
              disabled={isLoading}
            />
            {formErrors.email && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.email}</p>}
          </div>

          <div>
            <label htmlFor="portfolio-phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="portfolio-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="9876543210"
              disabled={isLoading}
            />
            {formErrors.phone && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.phone}</p>}
          </div>

          <div>
            <label htmlFor="portfolio-file" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Upload File <span className="text-gray-500 dark:text-gray-400 text-xs ml-2">(Optional)</span>
            </label>
            <div className="relative">
              <input
                type="file"
                id="portfolio-file"
                name="file"
                onChange={handleChange}
                className="hidden"
                disabled={isLoading}
              />
              <label
                htmlFor="portfolio-file"
                className={`flex items-center justify-center w-full px-3 py-2 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${formErrors.file
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 bg-gray-50 dark:bg-gray-700/50'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaUpload className="mr-2 text-gray-500 dark:text-gray-400 text-sm" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {fileName || "Choose file or drag here"}
                </span>
              </label>
            </div>
            {fileName && (
              <div className="mt-2 flex items-center justify-between bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{fileName}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="ml-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  disabled={isLoading}
                >
                  <FaTimes />
                </button>
              </div>
            )}
            {formErrors.file && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.file}</p>}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Max file size: 5MB</p>
          </div>


          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Message <span className="text-red-500">*</span></label>
            <textarea
              id="portfolio-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              maxLength={600}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Your message here..."
              disabled={isLoading}
            ></textarea>
            {formErrors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.message}</p>}
            <p className={`text-xs mt-1 ${formData.message.length > 550 ? 'text-orange-500 dark:text-orange-400' : 'text-gray-500 dark:text-gray-400'}`}>
              {formData.message.length >= 600 ? 'Maximum character limit reached' : `${600 - formData.message.length} characters remaining`}
            </p>
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
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
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
    navigate('/contact');
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
                "https://instagram.com/jay_kumar_sharma_/",
                "https://x.com/Jay_kumar__",
                "https://peerlist.io/jaykumar108"

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
        <div className="container mx-auto px-6 min-h-[70vh] flex items-center mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
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
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      {!profileImageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">
                          <Spinner className="size-8 text-blue-500" />
                        </div>
                      )}
                      <img
                        src="/profile1.png"
                        alt="Jay Sharma"
                        className="rounded-full shadow-xl w-48 h-48 md:w-64 md:h-64 object-cover border-1 border-white"
                        onLoad={() => setProfileImageLoaded(true)}
                        style={{ display: profileImageLoaded ? 'block' : 'none' }}
                      />
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
                <a href="https://resume.jaysharma.space" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <FaEye className="text-white cursor-pointer" />
                  <span>  View Resume</span>
                </a>

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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Introduce About Myself</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Text Content - Left Side */}
            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                Hello! I am Jay Kumar Sharma, a dedicated Web Developer with a passion for building interactive and user-friendly websites. My focus is on creating seamless, efficient, and engaging web solutions that enhance user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I am always eager to learn, grow, and take on new challenges in the ever-evolving world of web development. With a problem-solving mindset and a creative approach.
              </p>
            </div>

            {/* Video - Right Side */}
            <div className="flex-1">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <video
                  className="w-full max-w-md h-auto max-h-80 mx-auto rounded-3xl"
                  controls
                  poster="/cover.png"
                >
                  <source src="/fullstackvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
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
      <Projects onViewAllClick={handleNavigateToProject} />

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
                <img src="https://img.icons8.com/?size=100&id=JeO1Kv9jsmLr&format=png&color=000000" alt="Mail Icon" className="w-6 h-6 md:w-8 md:h-8" />
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
