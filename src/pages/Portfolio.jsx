import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaBehance, FaBars, FaTimes, FaInstagram, FaGithub, FaVoicemail, FaMailchimp, FaMailBulk } from "react-icons/fa";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";

// Social media links data
const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin className="text-2xl text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />,
    imageUrl: "", // Optional custom image URL
    link: "https://www.linkedin.com/in/jay-kumar-sharma-96112b25a/"
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub className="text-2xl text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />,
    imageUrl: "", // Optional custom image URL
    link: "https://github.com/jaykumar108/"
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="text-2xl text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />,
    imageUrl: "", // Optional custom image URL
    link: "https://instagram.com/jay_kumar_sharma_/"
  },
  {
    id: 4,
    name: "Email",
    icon: <FaVoicemail className="text-2xl text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />,
    imageUrl: "https://img.icons8.com/?size=100&id=63&format=png&color=000000", // Optional custom image URL
    link: "mailto:jaykumarsh2003@gmail.com"
  }
];

// Footer Social media links with custom styling
const footerSocialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin className="text-2xl text-white hover:text-orange-400 cursor-pointer transition-colors" />,
    imageUrl: "", // Optional custom image URL
    link: "https://www.linkedin.com/in/jay-kumar-sharma-96112b25a/"
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub className="text-2xl text-white hover:text-orange-400 cursor-pointer transition-colors" />,
    imageUrl: "", // Optional custom image URL
    link: "https://github.com/jaykumar108/"
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="text-2xl text-white hover:text-orange-400 cursor-pointer transition-colors" />,
    imageUrl: "", // Optional custom image URL
    link: "https://www.instagram.com/jay_kumar_sharma_/"
  },
  {
    id: 4,
    name: "Email",
    icon: <FaVoicemail className="text-2xl text-white hover:text-orange-400 cursor-pointer transition-colors" />,
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
          className="w-6 h-6 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors"
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
    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
      {showThankYou && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative animate-fade-in-down" role="alert">
          <strong className="font-bold">Thank You For Contacting! </strong>
          <span className="block sm:inline">I will contact you shortly.</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative animate-fade-in-down" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="user_name" className="block text-gray-700 font-medium mb-1">Your Name*</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${formErrors.user_name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter Your Name"
              disabled={isLoading}
            />
            {formErrors.user_name && <p className="text-red-500 text-sm mt-1">{formErrors.user_name}</p>}
          </div>
          
          <div>
            <label htmlFor="user_email" className="block text-gray-700 font-medium mb-1">Your Email*</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${formErrors.user_email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter Your Email"
              disabled={isLoading}
            />
            {formErrors.user_email && <p className="text-red-500 text-sm mt-1">{formErrors.user_email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="+91 1234567890"
              disabled={isLoading}
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your message here..."
              disabled={isLoading}
            ></textarea>
            {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <button 
            type="submit" 
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
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

const Portfolio = ({ onAboutClick, onServiceClick, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar 
        onHomeClick={() => {}} 
        onAboutClick={onAboutClick}
        onServiceClick={onServiceClick}
        onContactClick={onContactClick}
        currentPage="home" 
      />

      {/* Main Content - Add top padding to account for fixed navbar */}
      <main className="flex-grow pt-24 md:pt-32">
        {/* middle Section */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* name Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-600">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-2">Jay Kumar Sharma</h1>
              <p className="text-lg mt-2">
                <span className="text-green-500 font-semibold">Web Developer</span>
                <span className="text-purple-600 font-semibold"> </span>
              </p>
              <p className="mt-4 text-gray-600 max-w-xl md:max-w-none text-center md:text-left">
              I am a passionate Web Developer with a keen eye for creating user-friendly, responsive, and visually appealing websites.
              </p>
              <Button className="bg-orange-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-orange-600 transition-colors" onClick={onAboutClick}>
                About Me
              </Button>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 mt-8">
                {socialLinks.map((item) => (
                  <SocialLink key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative mx-auto md:mx-0">
                <img
                  src="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile.png" 
                  alt="Jay Sharma" 
                  className="rounded-full shadow-xl w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=000000" 
                  alt="React Icon"
                  className="absolute top-4 left-0 md:left-[-20px] w-8 md:w-12 animate-bounce"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=23028&format=png&color=000000" 
                  alt="HTML Icon"
                  className="absolute top-4 right-0 md:right-[-20px] w-8 md:w-12 animate-bounce"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=000000" 
                  alt="Tailwind Icon"
                  className="absolute bottom-[-10px] md:bottom-[-20px] left-1/2 transform -translate-x-1/2 w-8 md:w-12 animate-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Introduce About Myself</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Hello! I am Jay Kumar Sharma, a dedicated Web Developer with a passion for building interactive and user-friendly websites. I enjoy crafting digital experiences that are both visually appealing and highly functional. My focus is on creating seamless, efficient, and engaging web solutions that enhance user experience.
               </p>
            <p className="text-gray-600 leading-relaxed">
            I am always eager to learn, grow, and take on new challenges in the ever-evolving world of web development. With a problem-solving mindset and a creative approach.
                </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Equipped with a diverse set of technologies and tools to build cutting-edge web applications.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Skill 1 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" 
                  alt="React" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">React</h3>
            </div>
            
            {/* Skill 2 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" 
                  alt="Node.js" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">Node.js</h3>
            </div>
            
            {/* Skill 3 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" 
                  alt="JavaScript" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">JavaScript</h3>
            </div>
            
            {/* Skill 4 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" 
                  alt="HTML5" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">HTML5</h3>
            </div>
            
            {/* Skill 5 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=WlXoMrd84l96&format=png&color=000000" 
                  alt="CSS3" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">CSS</h3>
            </div>
            
            {/* Skill 6 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" 
                  alt="Tailwind CSS" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">Tailwind CSS</h3>
            </div>
            
            {/* Skill 7 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000" 
                  alt="MongoDB" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">MongoDB</h3>
            </div>
            
            {/* Skill 8 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000" 
                  alt="Express.js" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">Express.js</h3>
            </div>
            
            {/* Skill 9 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" 
                  alt="Git" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">Git</h3>
            </div>
            
            {/* Skill 10 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=46972&format=png&color=000000" 
                  alt="WordPress" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">WordPress</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Offering cutting-edge web development services to help your business thrive in the digital landscape.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Web Development</h3>
              <p className="text-gray-600 text-center">Custom websites built with the latest technologies to deliver exceptional user experiences.</p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">WordPress Development</h3>
              <p className="text-gray-600 text-center">We specialize in custom WordPress development, creating powerful, scalable, and easy-to-manage websites.</p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Graphic Design</h3>
              <p className="text-gray-600 text-center">Our graphic design services help brands stand out with professional and creative designs.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              onClick={onServiceClick}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Check out some of my recent works and personal projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//Screenshot%202025-03-20%20225231.png" 
                  alt="Student Record System" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Student Record System</h3>
                <p className="text-gray-600 mb-4">The Student Record System is a web-based application that allows users to efficiently manage student information.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">HTML, CSS, JavaScript</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Node.js</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold">MongoDB</span>
                </div>
                <div className="flex justify-between items-center">
                  <a href="https://student-record-system-ybl8.onrender.com/" className="font-medium text-orange-500 hover:text-orange-600 transition-colors">View Project</a>
                  <a href="#" className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Source Code</a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//Screenshot%202025-03-21%20003001.png" 
                  alt="E-Learning" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Learning</h3>
                <p className="text-gray-600 mb-4">E-Learning Website is an interactive online learning platform designed to make education accessible, engaging, and effective for everyone</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">HTML, CSS, JavaScript</span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">Node.js</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-semibold">MonogoDB</span>
                </div>
                <div className="flex justify-between items-center">
                  <a href="https://elearning-web-com.onrender.com/home" className="font-medium text-orange-500 hover:text-orange-600 transition-colors">View Project</a>
                  <a href="#" className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Source Code</a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//carrer.png" 
                  alt="Career Portal" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Career Portal</h3>
                <p className="text-gray-600 mb-4">Under Development Process- Coming Soon🚀</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">React js, Tailwind CSS</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">Node js, Express js</span>
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-semibold">MongoDB</span>
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="font-medium text-orange-500 hover:text-orange-600 transition-colors">View Project</a>
                  <a href="#" className="font-medium text-gray-600 hover:text-gray-900 transition-colors">Source Code</a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-section" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Feel free to reach out for collaborations, questions, or just to say hello!</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 backdrop-blur-sm mt-20 py-10 border text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-600">Jay Kumar Sharma</h3>
              <p className="text-gray-600 font-semibold"><div className="flex items-center space-x-3">

  <img src="https://img.icons8.com/?size=100&id=JeO1Kv9jsmLr&format=png&color=000000" alt="Mail Icon" className="w-6 h-6 md:w-8 md:h-8"/>
    <p className="text-gray-600 font-semibold text-white">jaykumarsh2003@gmail.com</p> </div> </p>


              <div className="flex space-x-4 text-white">
                {footerSocialLinks.map((item) => (
                  <FooterSocialLink key={item.id} item={item} />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-orange-500 cursor-pointer text-white">Graphic Design , WordPress </li>
                <li className="hover:text-orange-500 cursor-pointer text-white">Web Development</li>
   
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Important Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-orange-500 cursor-pointer text-white" onClick={onAboutClick}>About Me</li>
                <li className="hover:text-orange-500 cursor-pointer text-white" onClick={onServiceClick}>Services</li>
                <li className="hover:text-orange-500 cursor-pointer text-white" onClick={onContactClick}>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-600 text-white">
                <li>Darbhanga, Bihar india</li>
               
                <li>+91 0000000000    </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-4 pt-2 text-center text-white">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
