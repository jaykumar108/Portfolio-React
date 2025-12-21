import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaVoicemail, FaLinkedin, FaGithub, FaInstagram, FaUpload, FaTimes } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { sendContactForm } from '../services/contactus.service';
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
    const fileInput = document.getElementById('file');
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
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Your Name Here..."
              disabled={isLoading}
            />
            {formErrors.name && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Your Email Here..."
              disabled={isLoading}
            />
            {formErrors.email && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.email}</p>}
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
              placeholder="9876543210"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="file" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Upload File <span className="text-gray-500 dark:text-gray-400 text-xs ml-2"> (Optional) </span></label>
            <div className="relative">
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                className="hidden"
                disabled={isLoading}
              />
              <label
                htmlFor="file"
                className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${formErrors.file
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 bg-gray-50 dark:bg-gray-700/50'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaUpload className="mr-2 text-gray-500 dark:text-gray-400" />
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
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message <span className="text-red-500">*</span></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              maxLength={600}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              placeholder="Your message here..."
              disabled={isLoading}
            ></textarea>
            {formErrors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{formErrors.message}</p>}
            <p className={`text-xs mt-1 ${formData.message.length > 550 ? 'text-orange-500 dark:text-orange-400' : 'text-gray-500 dark:text-gray-400'}`}>
              {formData.message.length >= 600 ? 'Maximum character limit reached' : `${600 - formData.message.length} characters remaining`}
            </p>
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
        onContactClick={() => { }}
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
                    <p className="text-gray-600 dark:text-gray-300">Usually within 1-5 hours</p>
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
        onContactClick={() => { }}
      />
    </div>
  );
};

export default Contact;
