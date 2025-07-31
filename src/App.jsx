import { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'
import Portfolio from './pages/Portfolio'
import About from './components/About'
import Service from './components/Service'
import emailjs from 'emailjs-com'



function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const contactSectionRef = useRef(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("lrivzXbMVzdaxpZ91"); // Public key provided by the user
  }, []);

  const handleNavigateToHome = () => {
    setCurrentPage('home')
  }

  const handleNavigateToAbout = () => {
    setCurrentPage('about')
  }

  const handleNavigateToService = () => {
    setCurrentPage('service')
  }

  const handleNavigateToContact = () => {
    setCurrentPage('home')
    // We need to wait for the component to render before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleNavigateToProject = () => {
    setCurrentPage('home')
    // We need to wait for the component to render before scrolling
    setTimeout(() => {
      const projectSection = document.getElementById('project-section')
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Jay Sharma - MERN Stack Developer | Portfolio</title>
        <meta name="title" content="Jay Sharma - Full Stack Developer | Portfolio" />
        <meta name="description" content="Professional portfolio of Jay Sharma, a skilled Full Stack Developer specializing in React, Node.js, and modern web technologies. View projects, skills, and contact information." />
        <meta name="keywords" content="jay sharma, jay sharma web developer, jay MERN stack Developer, jay sharma space, Jay Kumar sharma, Full Stack Developer, React Developer, Node.js Developer, Web Developer, Portfolio, Frontend Developer, Backend Developer, JavaScript, TypeScript, React, Node.js, MongoDB, Express.js, portfolio jay sharma, jay sharma netlify, jay sharma portfolio netlify" />
        <meta name="subject" content="Portfolio Jay Sharma - Full Stack Developer" />
        <meta name="classification" content="Portfolio Jay Sharma" />
        <meta name="category" content="Jay Sharma Space Portfolio" />
        <meta name="author" content="Jay Sharma" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaysharma.space/" />
        <meta property="og:title" content="Jay Sharma - Full Stack Developer | Portfolio" />
        <meta property="og:description" content="Professional portfolio of Jay Sharma, a skilled Full Stack Developer specializing in React, Node.js, and modern web technologies." />
        <meta property="og:image" content="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png" />
        <meta property="og:site_name" content="Jay Sharma Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jaysharma.space/" />
        <meta property="twitter:title" content="Jay Sharma - Full Stack Developer | Portfolio" />
        <meta property="twitter:description" content="Professional portfolio of Jay Sharma, a skilled Full Stack Developer specializing in React, Node.js, and modern web technologies." />
        <meta property="twitter:image" content="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Jay Sharma Portfolio" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://jaysharma.space/" />
        
        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jay Sharma",
          "jobTitle": "Full Stack Developer",
          "description": "Professional Full Stack Developer specializing in React, Node.js, and modern web technologies",
          "url": "https://jaysharma.space/",
          "image": "https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png",
          "alternateName": ["Portfolio Jay Sharma", "Jay Sharma Space", "Jay Kumar Sharma"],
          "sameAs": [
            "https://github.com/jaykumar108/",
            "https://linkedin.com/in/jaykumar108/",
            "https://twitter.com/your-twitter"
          ],
          "knowsAbout": [
            "React.js",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "MongoDB",
            "Express.js",
            "Full Stack Development",
            "Web Development",
            "Portfolio Development",
            "MERN Stack Development"
          ],
          "additionalName": "Portfolio Jay Sharma",
          "identifier": {
            "@type": "PropertyValue",
            "name": "Portfolio URL",
            "value": "https://jaysharma.space/"
          }
        }
        `}
        </script>
      </Helmet>
      
      {currentPage === 'about' ? (
        <About 
          onHomeClick={handleNavigateToHome}
          onServiceClick={handleNavigateToService}
          onContactClick={handleNavigateToContact}
          onProjectClick={handleNavigateToProject}
        />
      ) : currentPage === 'service' ? (
        <Service 
          onHomeClick={handleNavigateToHome}
          onAboutClick={handleNavigateToAbout}
          onContactClick={handleNavigateToContact}
          onProjectClick={handleNavigateToProject}
        />
      ) : (
        <Portfolio 
          onAboutClick={handleNavigateToAbout}
          onServiceClick={handleNavigateToService}
          onContactClick={handleNavigateToContact}
          onProjectClick={handleNavigateToProject}
        />
      )}
    </>
  )
}

export default App
