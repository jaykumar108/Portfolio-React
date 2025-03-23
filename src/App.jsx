import { useState, useRef, useEffect } from 'react'
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

  return (
    <>
      {currentPage === 'about' ? (
        <About 
          onHomeClick={handleNavigateToHome}
          onServiceClick={handleNavigateToService}
          onContactClick={handleNavigateToContact}
        />
      ) : currentPage === 'service' ? (
        <Service 
          onHomeClick={handleNavigateToHome}
          onAboutClick={handleNavigateToAbout}
          onContactClick={handleNavigateToContact}
        />
      ) : (
        <Portfolio 
          onAboutClick={handleNavigateToAbout}
          onServiceClick={handleNavigateToService}
          onContactClick={handleNavigateToContact}
        />
      )}
    </>
  )
}

export default App
