import React from "react";
import { useNavigate } from "react-router-dom";
import ModernNavbar from "../components/ModernNavbar";
import QuestionPaperGenerator from "../components/QuestionPaperGenerator";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
