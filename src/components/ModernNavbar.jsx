import React, { useState } from "react";
import { FaBars, FaTimes, FaCode, FaHome, FaUser, FaCogs, FaFolder, FaEnvelope } from "react-icons/fa";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ModernNavbar = ({ onHomeClick, onAboutClick, onServiceClick, onContactClick, onProjectClick, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome, onClick: onHomeClick },
    { id: 'about', label: 'About', icon: FaUser, onClick: onAboutClick },
    { id: 'service', label: 'Services', icon: FaCogs, onClick: onServiceClick },
    { id: 'project', label: 'Projects', icon: FaFolder, onClick: onProjectClick },
    { id: 'contact', label: 'Contact', icon: FaEnvelope, onClick: onContactClick },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </Button>

            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-600 rounded-lg">
                <FaCode className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Jay Sharma</h1>
                <p className="text-xs text-muted-foreground">Web Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "transition-all duration-300 ease-in-out group flex items-center cursor-pointer",
                      isActive 
                        ? "bg-gradient-to-r from-blue-500 to-teal-600 text-white shadow-lg w-auto px-3" 
                        : "hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-600 hover:text-white hover:shadow-lg w-10 hover:w-auto hover:px-3"
                    )}
                    onClick={item.onClick}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="ml-2 max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap">
                      {item.label}
                    </span>
                  </Button>
                );
              })}
            </div>

            {/* Empty div for mobile spacing */}
            <div className="md:hidden w-10"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-background border-r border-border shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          {/* Mobile Header */}
          <div className="flex justify-between items-center mb-8 ">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <FaCode className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Jay Sharma</h2>
                <p className="text-xs text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Mobile Navigation Items */}
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start transition-all duration-200",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => {
                    setIsMenuOpen(false);
                    item.onClick();
                  }}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Mobile Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-sm text-muted-foreground">
              <p>Let's build something amazing together</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar; 