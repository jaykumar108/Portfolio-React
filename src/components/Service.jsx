import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
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
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import ModernNavbar from './ModernNavbar';
import ToggleButton from './ToggleButton';

const Service = () => {
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

  const handleNavigateToContact = () => {
    navigate('/');
    // We need to wait for the component to render before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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

  // Services data
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Websites built with the latest technologies to deliver exceptional user experiences.",
      icon: <FaCode className="text-3xl text-blue-500" />,
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
      icon: <FaMobileAlt className="text-3xl text-blue-500" />,
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
    //   icon: <FaPalette className="text-3xl text-blue-500" />,
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
      icon: <FaServer className="text-3xl text-blue-500" />,
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
    //   icon: <FaDatabase className="text-3xl text-blue-500" />,
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
    //   icon: <FaShieldAlt className="text-3xl text-blue-500" />,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Jay Kumar Sharma - Web Developer | Full Stack Developer</title>
        <meta name="title" content="Web Development Services - Jay Kumar Sharma | Full Stack Developer" />
        <meta name="description" content="Professional web development services by Jay Kumar Sharma. Specializing in React, Node.js, responsive design, graphic design, and backend development. Get custom websites and web applications." />
        <meta name="keywords" content="web development services, jay sharma services, jay sharma web developer services, jay sharma MERN stack services, jay sharma space services, Jay Kumar sharma services, react development services, node.js development, responsive web design, graphic design services, backend development, frontend development, custom website development, web application development, portfolio development, WordPress development, CMS development, API development, database design, cloud integration, responsive UI design, social media post design, logo design, template design, card design" />
        <meta name="author" content="Jay Kumar Sharma" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaysharma.space/services" />
        <meta property="og:title" content="Jay Kumar Sharma - Web Development Services | Full Stack Developer" />
        <meta property="og:description" content="Jay Kumar Sharma - Professional web development services. Specializing in React, Node.js, responsive design, graphic design, and backend development. Get custom websites and web applications from Jay Kumar Sharma." />
        <meta property="og:image" content="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Web Development Services - Jay Sharma" />
        <meta property="og:site_name" content="Jay Sharma Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jaysharma.space/services" />
        <meta property="twitter:title" content="Jay Kumar Sharma - Web Development Services | Full Stack Developer" />
        <meta property="twitter:description" content="Jay Kumar Sharma - Professional web development services. Specializing in React, Node.js, responsive design, and backend development." />
        <meta property="twitter:image" content="https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png" />
        <meta property="twitter:image:alt" content="Jay Kumar Sharma - Web Development Services" />
        <meta property="twitter:creator" content="@jaysharma" />
        <meta property="twitter:site" content="@jaysharma" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://jaysharma.space/services" />

        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Jay Kumar Sharma Web Development Services",
          "description": "Jay Kumar Sharma - Professional web development services including frontend development, backend development, graphic design, and responsive web design",
          "provider": {
            "@type": "Person",
            "name": "Jay Kumar Sharma",
            "jobTitle": "Full Stack Developer",
            "url": "https://jaysharma.space/"
          },
          "url": "https://jaysharma.space/services",
          "image": "https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//profile-photoaidcom-cropped.png",
          "serviceType": [
            "Web Development",
            "Frontend Development", 
            "Backend Development",
            "Graphic Design",
            "Responsive Web Design",
            "API Development",
            "Database Design",
            "Cloud Integration"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Responsive websites built with modern technologies like React, HTML, CSS, and JavaScript"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Graphic Design",
                  "description": "Professional graphic design services including logo design, social media posts, and template design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Backend Development",
                  "description": "Server-side development using Node.js, Express, and cloud integration services"
                }
              }
            ]
          },
          "potentialAction": {
            "@type": "ContactPage",
            "name": "Contact for Services",
            "url": "https://jaysharma.space/#contact"
          }
        }
        `}
        </script>

        {/* Additional Structured Data for LocalBusiness */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jay Kumar Sharma Web Development Services",
          "description": "Jay Kumar Sharma - Professional web development and design services",
          "url": "https://jaysharma.space/services",
          "telephone": "",
          "email": "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "India"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "",
            "longitude": ""
          },
          "openingHours": "Mo-Su 09:00-18:00",
          "priceRange": "$$",
          "currenciesAccepted": "INR, USD",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services"
          }
        }
        `}
        </script>
      </Helmet>

      {/* Navbar */}
      <ModernNavbar
        onHomeClick={handleNavigateToHome}
        onAboutClick={handleNavigateToAbout}
        onServiceClick={() => { }}
        onContactClick={handleNavigateToContact}
        onProjectClick={handleNavigateToProject}
        currentPage="service"
      />

      {/* Hero Section - Add top padding to account for fixed navbar */}
      {/* <section className="pt-28 pb-20 md:pt-32 md:pb-28 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Services</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I offer a wide range of web development services to help businesses establish a strong online presence.
              From designing beautiful user interfaces to developing robust backend systems, I can help turn your ideas into reality.
            </p>
          </div>
        </div>
      </section> */}

      {/* Services Carousel Section */}
      <section className="py-16 mt-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore the range of professional services I offer to bring your digital vision to life.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {/* Service 1: Full Stack Development */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/fullstackdevelopment.png"
                        alt="Full Stack Development"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Full Stack Development</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        End-to-end web application development with modern technologies and best practices.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">MERN Stack (MongoDB, Express, React, Node.js)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">RESTful API Development</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Service 2: App Development */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/App_development_React_Native.png"
                        alt="App Development"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">App Development</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Cross-platform mobile applications built with React Native for Android.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 dark:text-purple-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">React Native Development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 dark:text-purple-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Native Performance & UI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 dark:text-purple-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Android Platform Deployment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Service 3: WordPress Development */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/wordpress.png"
                        alt="WordPress Development"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">WordPress Development</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Custom WordPress websites and themes tailored to your business needs.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Custom Theme Development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Plugin Integration & Customization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">SEO Optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Service 4: Landing Pages */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="landing.png"
                        alt="Landing Pages"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Landing Pages</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        High-converting landing pages designed to capture leads and drive conversions.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 dark:text-green-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Conversion-Optimized Design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 dark:text-green-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Fast Loading & Performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 dark:text-green-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Mobile-First Approach</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Service 5: E-Commerce Applications */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/ecommerce.png"
                        alt="E-Commerce Applications"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">E-Commerce Applications</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Complete e-commerce solutions with secure payment integration and inventory management.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Shopping Cart & Checkout</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Payment Gateway Integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">Product Management System</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Capabilities</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the core technologies and approaches that power my web development services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Feature 1: Responsive Design - Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Responsive Design for All Devices
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Every website I create is built to provide an optimal viewing experience across all devices.
                  From desktop monitors to tablets and smartphones, your site will look stunning and function
                  flawlessly on every screen size.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Mobile-first approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Fluid layouts and flexible grids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Touch-friendly interfaces</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="/responsive_design_feature_1766325516845.png"
                  alt="Responsive Design Illustration"
                  className="max-w-sm mx-auto h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Feature 2: React Framework - Image Left */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Modern JavaScript Frameworks (React, Next.js)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Leveraging the power of React, I build dynamic, interactive web applications with exceptional
                  performance. React's component-based architecture ensures maintainable code and seamless user experiences.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Component reusability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Fast rendering with Virtual DOM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Rich ecosystem of libraries</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="/react_framework_feature_1766325542500.png"
                  alt="React Framework Illustration"
                  className="max-w-sm mx-auto h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Feature 3: App Development - Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  App Development (React Native)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Building cross-platform mobile applications with React Native that deliver native performance
                  and user experience. Write once, deploy to Android platforms seamlessly.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Cross-platform mobile apps (Android)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Native performance and UI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Code sharing between web and mobile</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="/App_development_React_Native.png"
                  alt="App Development React Native Illustration"
                  className="max-w-sm mx-auto h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Feature 4: Portfolio Making - Image Left */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Portfolio Making
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Specializing in creating stunning portfolio websites that showcase your work in the best light.
                  From developers to designers and creatives, I build portfolios that leave lasting impressions.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Custom designs tailored to your brand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>Project galleries and case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                    <span>SEO optimization for visibility</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="/portfolio_making_feature_1766325595708.png"
                  alt="Portfolio Making Illustration"
                  className="max-w-sm mx-auto h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I follow a systematic approach to ensure every project is completed efficiently and meets the highest standards of quality.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map(step => (
                <div key={step.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <FaLaptopCode className="text-4xl text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technical Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                With years of experience in web development, I have developed a strong foundation in both frontend and backend technologies.
                I stay updated with the latest trends and best practices to deliver modern and efficient solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <FaSearch className="text-4xl text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Attention to Detail</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I believe that small details make a big difference. From pixel-perfect designs to optimized code,
                I pay close attention to every aspect of your project to ensure the highest quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900 dark:to-teal-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Project with Jay Kumar Sharma?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Let's work together with Jay Kumar Sharma to create something amazing. Contact Jay Kumar Sharma today to discuss your project requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg" onClick={handleNavigateToContact}>
                Contact Me
              </Button>
              {/* <Button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
                View Portfolio
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Button */}
      <ToggleButton
        onHomeClick={handleNavigateToHome}
        onAboutClick={handleNavigateToAbout}
        onServiceClick={() => { }}
        onContactClick={handleNavigateToContact}
      />
    </div>
  );
};

export default Service; 