import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaVoicemail, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Button from '../components/Button';
import ModernNavbar from '../components/ModernNavbar';
import ToggleButton from '../components/ToggleButton';

// Social media links data
const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />,
    link: "https://www.linkedin.com/in/jaykumar108"
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />,
    link: "https://github.com/jaykumar108/"
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />,
    link: "https://instagram.com/jay_kumar_sharma_/"
  },
  {
    id: 4,
    name: "Email",
    icon: <FaVoicemail className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />,
    link: "mailto:jaykumarsh2003@gmail.com"
  }
];

// Social Media Link Component
const SocialLink = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>
      {item.icon}
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
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="user_name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Name*</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.user_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Enter Your Name"
              disabled={isLoading}
            />
            {formErrors.user_name && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.user_name}</p>}
          </div>
          
          <div>
            <label htmlFor="user_email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Email*</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.user_email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Enter Your Email"
              disabled={isLoading}
            />
            {formErrors.user_email && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.user_email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="+91 1234567890"
              disabled={isLoading}
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Your message here..."
              disabled={isLoading}
            ></textarea>
            {formErrors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.message}</p>}
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button 
            type="submit" 
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
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

const Contact = () => {
  const navigate = useNavigate();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("lrivzXbMVzdaxpZ91"); // Public key provided by the user
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateToHome = () => {
    navigate('/');
  };

  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  const handleNavigateToServices = () => {
    navigate('/services');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Jay Kumar Sharma - Web Developer | Get In Touch</title>
        <meta name="title" content="Contact Jay Kumar Sharma - Web Developer | Get In Touch" />
        <meta name="description" content="Get in touch with Jay Kumar Sharma, a passionate Web Developer. Contact for collaborations, questions, or just to say hello! Available for freelance projects." />
        <meta name="keywords" content="contact jay kumar sharma, jay kumar sharma contact, jay kumar sharma email, jay kumar sharma phone, jay kumar sharma web developer contact, jay kumar sharma freelance contact, jay kumar sharma hire, jay kumar sharma collaboration, jay kumar sharma project inquiry, jay kumar sharma consultation, jay kumar sharma darbhanga contact, jay kumar sharma bihar contact, jay kumar sharma india contact, jay kumar sharma web development services, jay kumar sharma portfolio contact, jay kumar sharma space contact" />
        <meta name="author" content="Jay Kumar Sharma" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaysharma.space/contact" />
        <meta property="og:title" content="Contact Jay Kumar Sharma - Web Developer | Get In Touch" />
        <meta property="og:description" content="Get in touch with Jay Kumar Sharma, a passionate Web Developer. Contact for collaborations, questions, or just to say hello!" />
        <meta property="og:image" content="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png" />
        <meta property="og:site_name" content="Jay Kumar Sharma Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jaysharma.space/contact" />
        <meta property="twitter:title" content="Contact Jay Kumar Sharma - Web Developer | Get In Touch" />
        <meta property="twitter:description" content="Get in touch with Jay Kumar Sharma, a passionate Web Developer. Contact for collaborations, questions, or just to say hello!" />
        <meta property="twitter:image" content="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png" />
        <meta property="twitter:creator" content="@jaysharma" />
        <meta property="twitter:site" content="@jaysharma" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://jaysharma.space/contact" />
      </Helmet>
      
      {/* Navbar */}
      <ModernNavbar 
        onHomeClick={handleNavigateToHome} 
        onAboutClick={handleNavigateToAbout} 
        onServiceClick={handleNavigateToServices}
        onContactClick={() => {}} 
        onProjectClick={handleNavigateToProject}
        currentPage="contact" 
      />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-28 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a question, want to discuss a project, or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-full">
                    <FaVoicemail className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">jaykumarsh2003@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Darbhanga, Bihar, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Response Time</h3>
                    <p className="text-gray-600 dark:text-gray-300">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((item) => (
                    <SocialLink key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Button */}
      <ToggleButton 
        onHomeClick={handleNavigateToHome} 
        onAboutClick={handleNavigateToAbout} 
        onServiceClick={handleNavigateToServices}
        onContactClick={() => {}} 
      />
    </div>
  );
};

export default Contact;
