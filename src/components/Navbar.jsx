import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = ({ onHomeClick, onAboutClick, onServiceClick, onContactClick, onProjectClick, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <h1 className="text-2xl md:text-2xl font-bold text-orange-600"> 𝓳𝓪𝔂 𝓼𝓱𝓪𝓻𝓶𝓪</h1>

            {/* Desktop Menu - Centered */}
            <ul className="hidden md:flex space-x-6 text-lg absolute left-1/2 transform -translate-x-1/2">
              <li 
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md ${
                  currentPage === 'home' 
                    ? 'text-orange-500 font-semibold bg-orange-50 shadow-sm' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={onHomeClick}
              >
                Home
              </li>
              <li 
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md ${
                  currentPage === 'about' 
                    ? 'text-orange-500 font-semibold bg-orange-50 shadow-sm' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={onAboutClick}
              >
                About
              </li>
              <li 
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md ${
                  currentPage === 'service' 
                    ? 'text-orange-500 font-semibold bg-orange-50 shadow-sm' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={onServiceClick}
              >
                Services
              </li>
               <li 
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md ${
                  currentPage === 'project' 
                    ? 'text-orange-500 font-semibold bg-orange-50 shadow-sm' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                onClick={onProjectClick}
              >
                Projects
              </li>
              <li 
                className="cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md text-gray-700 hover:text-orange-600"
                onClick={onContactClick}
              >
                Contact
              </li>
            </ul>

            {/* Empty div to maintain spacing */}
            <div className="hidden md:block w-24"></div>
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
            <h2 className="text-2xl font-bold text-orange-600">Menu</h2>
            <button 
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <ul className="space-y-4">
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md ${
                currentPage === 'home' 
                  ? 'text-orange-500 font-semibold bg-orange-50 shadow-sm' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onHomeClick();
              }}
            >
              Home
            </li>
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md ${
                currentPage === 'about' 
                  ? 'text-orange-500 font-semibold bg-orange-50 shadow-sm' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onAboutClick();
              }}
            >
              About
            </li>
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md ${
                currentPage === 'service' 
                  ? 'text-orange-500 font-semibold bg-orange-50 shadow-sm' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onServiceClick();
              }}
            >
              Services
            </li>
            <li 
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md ${
                currentPage === 'project' 
                  ? 'text-orange-500 font-semibold bg-orange-50 shadow-sm' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                onProjectClick();
              }}
            >
              Projects
              </li>
            <li 
              className="cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-md text-gray-700 hover:text-orange-600"
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