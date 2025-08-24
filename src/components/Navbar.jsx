import React, { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import Button from "./Button";

const Navbar = ({ onHomeClick, onAboutClick, onServiceClick, onContactClick, onProjectClick, onToolsClick, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Logo and Name */}
            <div className="flex items-center space-x-2">
              <FaCode className="text-blue-500 text-2xl" />
              <h1 className="text-2xl font-bold text-gray-800">Jay Sharma</h1>
            </div>

            {/* Desktop Menu - Right Aligned */}
            <ul className="hidden md:flex space-x-8 text-lg">
              <li 
                className={`cursor-pointer py-2 transition-all duration-300 ease-in-out ${
                  currentPage === 'home'  
                    ? 'text-blue-500 font-medium border-b-2 border-blue-500' 
                    : 'text-gray-700 hover:text-blue-500'
                }`}
                onClick={onHomeClick}
              >
                Home
              </li>
              <li 
                className={`cursor-pointer py-2 transition-all duration-300 ease-in-out ${
                  currentPage === 'about' 
                    ? 'text-blue-500 font-medium border-b-2 border-blue-500' 
                    : 'text-gray-700 hover:text-blue-500'
                }`}
                onClick={onAboutClick}
              >
                About
              </li>
              <li 
                className={`cursor-pointer py-2 transition-all duration-300 ease-in-out ${
                  currentPage === 'service' 
                    ? 'text-blue-500 font-medium border-b-2 border-blue-500' 
                    : 'text-gray-700 hover:text-blue-500'
                }`}
                onClick={onServiceClick}
              >
                Services
              </li>
               <li 
                className={`cursor-pointer py-2 transition-all duration-300 ease-in-out ${
                  currentPage === 'project' 
                    ? 'text-blue-500 font-medium border-b-2 border-blue-500' 
                    : 'text-gray-700 hover:text-blue-500'
                }`}
                onClick={onProjectClick}
              >
                Projects
              </li>
              <li 
                className={`cursor-pointer py-2 transition-all duration-300 ease-in-out ${
                  currentPage === 'tools' 
                    ? 'text-blue-500 font-medium border-b-2 border-blue-500' 
                    : 'text-gray-700 hover:text-blue-500'
                }`}
                onClick={onToolsClick}
              >
                Tools
              </li>
              <li 
                className={`cursor-pointer py-2 transition-all duration-300 ease-in-out ${
                  currentPage === 'contact' 
                    ? 'text-blue-500 font-medium border-b-2 border-blue-500' 
                    : 'text-gray-700 hover:text-blue-500'
                }`}
                onClick={onContactClick}
              >
                Contact
              </li>
            </ul>

            {/* Empty div to maintain spacing on mobile */}
            <div className="md:hidden w-8"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <FaCode className="text-blue-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Jay Sharma</h2>
            </div>
            <button 
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <ul className="space-y-4">
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                currentPage === 'home' 
                  ? 'text-blue-500 font-medium bg-blue-50 border-l-4 border-blue-500' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onHomeClick();
              }}
            >
              Home
            </li>
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                currentPage === 'about' 
                  ? 'text-blue-500 font-medium bg-blue-50 border-l-4 border-blue-500' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onAboutClick();
              }}
            >
              About
            </li>
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                currentPage === 'service' 
                  ? 'text-blue-500 font-medium bg-blue-50 border-l-4 border-blue-500' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onServiceClick();
              }}
            >
              Services
            </li>
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                currentPage === 'project' 
                  ? 'text-blue-500 font-medium bg-blue-50 border-l-4 border-blue-500' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onProjectClick();
              }}
            >
              Projects
            </li>
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                currentPage === 'tools' 
                  ? 'text-blue-500 font-medium bg-blue-50 border-l-4 border-blue-500' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onToolsClick();
              }}
            >
              Tools
            </li>
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                currentPage === 'contact' 
                  ? 'text-blue-500 font-medium bg-blue-50 border-l-4 border-blue-500' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onContactClick();
              }}
            >
              Contact
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar; 