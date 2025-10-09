import React from "react";
import { useNavigate } from "react-router-dom";
import ModernNavbar from "../components/ModernNavbar";
import QuestionPaperGenerator from "../components/QuestionPaperGenerator";
import { Helmet } from "react-helmet";

const QuestionPaperDemo = () => {
  const navigate = useNavigate();

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
    navigate('/project');
  };

  const handleNavigateToTools = () => {
    navigate('/tools');
  };

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>Jay Kumar Sharma - Tools | Question Paper Generator</title>    
        <meta name="title" content="Jay Kumar Sharma - Tools | Question Paper Generator" />
        <meta name="description" content="Jay Kumar Sharma - Tools | Question Paper Generator" />
        <meta name="keywords" content="jay kumar sharma, jay sharma, jay sharma tools, jay kumar sharma question paper generator, jay kumar sharma question paper, jay kumar sharma question paper generator, jay kumar sharma question paper generator, jay kumar sharma question paper generator" />
        <meta name="author" content="Jay Kumar Sharma" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="subject" content="Jay Kumar Sharma - Tools | Question Paper Generator" />
        <meta name="classification" content="Jay Kumar Sharma - Tools | Question Paper Generator" />
        <meta name="category" content="Jay Kumar Sharma - Tools | Question Paper Generator" />
        <meta name="subject" content="Jay Kumar Sharma - Tools | Question Paper Generator" />
        <meta name="classification" content="Jay Kumar Sharma - Tools | Question Paper Generator" />
        <meta name="category" content="Jay Kumar Sharma - Tools | Question Paper Generator" />
      </Helmet>
      {/* Navbar */}
      <ModernNavbar 
        onHomeClick={handleNavigateToHome} 
        onAboutClick={handleNavigateToAbout}
        onServiceClick={handleNavigateToServices}
        onContactClick={handleNavigateToContact}
        onProjectClick={handleNavigateToProject}
        onToolsClick={handleNavigateToTools}
        currentPage="tools" 
      />
      
      {/* Main Content with top padding for navbar */}
      <div className="pt-24">
        <QuestionPaperGenerator />
      </div>
    </div>
  );
};

export default QuestionPaperDemo;
