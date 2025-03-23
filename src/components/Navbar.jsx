import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = ({ onHomeClick, onAboutClick, onServiceClick, onContactClick, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <h1 className="text-2xl md:text-3xl font-bold text-orange-600"> Profile</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-lg">
              <li 
                className={`cursor-pointer hover:text-orange-600 ${currentPage === 'home' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}
                onClick={onHomeClick}
              >
                Home
              </li>
              <li 
                className={`cursor-pointer hover:text-orange-600 ${currentPage === 'about' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}
                onClick={onAboutClick}
              >
                About
              </li>
              <li 
                className={`cursor-pointer hover:text-orange-600 ${currentPage === 'service' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}
                onClick={onServiceClick}
              >
                Services
              </li>
              <li 
                className="cursor-pointer hover:text-orange-500 text-gray-700"
                onClick={onContactClick}
              >
                Contact
              </li>
            </ul>

            <Button className="hidden md:block border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
              Download CV
            </Button>
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
              className="text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <ul className="space-y-4">
            <li 
              className={`cursor-pointer hover:text-orange-600 ${currentPage === 'home' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}
              onClick={() => {
                setIsMenuOpen(false);
                onHomeClick();
              }}
            >
              Home
            </li>
            <li 
              className={`cursor-pointer hover:text-orange-600 ${currentPage === 'about' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}
              onClick={() => {
                setIsMenuOpen(false);
                onAboutClick();
              }}
            >
              About
            </li>
            <li 
              className={`cursor-pointer hover:text-orange-600 ${currentPage === 'service' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}
              onClick={() => {
                setIsMenuOpen(false);
                onServiceClick();
              }}
            >
              Services
            </li>
            <li 
              className="cursor-pointer hover:text-orange-500 text-gray-700"
              onClick={() => {
                setIsMenuOpen(false);
                onContactClick();
              }}
            >
              Contact
            </li>
          </ul>

          <Button className="mt-8 w-full border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white">
            Download CV
          </Button>

          <div className="mt-8 flex space-x-4">
            <svg className="w-6 h-6 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
            <svg className="w-6 h-6 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
            <svg className="w-6 h-6 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 