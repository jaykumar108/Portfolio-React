import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './App.css'
import Portfolio from './pages/Portfolio'
import About from './components/About'
import Service from './components/Service'
import Contact from './pages/Contact'
import NotFound from './components/NotFound'
import QuestionPaperDemo from './pages/QuestionPaperDemo'
import Loading from './components/ui/loading'
import emailjs from 'emailjs-com'
import { ThemeProvider } from './context/ThemeContext'



function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("lrivzXbMVzdaxpZ91"); // Public key provided by the user
  }, []);

  // Simulate loading time and initialize app
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, isLoading]);

  // Show loading screen while app is initializing
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading... - Jay Kumar Sharma Portfolio</title>
        </Helmet>
        <Loading text="Welcome to Jay Sharma's Portfolio" />
      </>
    );
  }

  return (
    <ThemeProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Jay Kumar Sharma - MERN Stack Developer | Portfolio</title>
        <meta name="title" content="Jay Kumar Sharma - Full Stack Developer | Portfolio" />
        <meta name="description" content="Professional portfolio of Jay Kumar Sharma, a skilled Full Stack Developer specializing in React, Node.js, and modern web technologies. View projects, skills, and contact information." />
        <meta name="keywords" content="jay kumar sharma, jay sharma, jay sharma Developer, jay kumar sharma web developer, jay kumar sharma mern stack developer, jay kumar sharma full stack developer, jay kumar sharma portfolio, jay kumar sharma space, jay kumar sharma react developer, jay kumar sharma node.js developer, jay kumar sharma javascript developer, jay kumar sharma mongodb developer, jay kumar sharma express developer, jay kumar sharma frontend developer, jay kumar sharma backend developer, jay kumar sharma india, jay kumar sharma remote developer, jay kumar sharma freelance developer, jay kumar sharma projects, jay kumar sharma skills, jay kumar sharma expertise, jay kumar sharma professional developer, jay kumar sharma web development, jay kumar sharma software development, jay kumar sharma programming, jay kumar sharma coding, jay kumar sharma tech, jay kumar sharma technology, jay kumar sharma digital, jay kumar sharma online, jay kumar sharma website, jay kumar sharma application, jay kumar sharma software, jay kumar sharma solution, jay kumar sharma service, jay kumar sharma consulting, jay kumar sharma peerlist, jay kumar sharma peerlist profile, jaykumar108 peerlist" />
        <meta name="subject" content="Portfolio Jay Kumar Sharma - Full Stack Developer" />
        <meta name="classification" content="Portfolio Jay Kumar Sharma" />
        <meta name="category" content="Jay Kumar Sharma Space Portfolio" />
        <meta name="author" content="Jay Kumar Sharma" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaysharma.space/" />
        <meta property="og:title" content="Jay Kumar Sharma - Full Stack Developer | Portfolio" />
        <meta property="og:description" content="Professional portfolio of Jay Kumar Sharma, a skilled Full Stack Developer specializing in React, Node.js, and modern web technologies." />
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
          "alternateName": ["Jay Sharma", "Portfolio Jay Kumar Sharma", "Jay Kumar Sharma Space"],
          "sameAs": [
            "https://github.com/jaykumar108/",
            "https://linkedin.com/in/jaykumar108/",
            "https://x.com/Jay_kumar__",
            "https://peerlist.io/jaykumar108"
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
          "additionalName": "Portfolio Jay Kumar Sharma",
          "identifier": {
            "@type": "PropertyValue",
            "name": "Portfolio URL",
            "value": "https://jaysharma.space/"
          }
        }
        `}
        </script>
      </Helmet>
      
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/question-paper" element={<QuestionPaperDemo />} />
        <Route path="/tools" element={<QuestionPaperDemo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about.html" element={<About />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
