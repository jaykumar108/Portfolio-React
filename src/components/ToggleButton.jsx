import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCogs, FaEnvelope } from 'react-icons/fa';

const ToggleButton = ({ onHomeClick, onAboutClick, onServiceClick, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (callback) => {
    setIsOpen(false);
    if (callback) callback();
  };

  const menuItems = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className="text-lg" />,
      onClick: onHomeClick
    },
    {
      id: 2,
      name: 'About',
      icon: <FaUser className="text-lg" />,
      onClick: onAboutClick
    },
    {
      id: 3,
      name: 'Services',
      icon: <FaCogs className="text-lg" />,
      onClick: onServiceClick
    },
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelope className="text-lg" />,
      onClick: onContactClick
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {/* Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 mb-4 z-60"
          >
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-2 min-w-[200px]">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.onClick)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-all duration-200 group"
                >
                  <div className="text-orange-500 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        className="bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-60"
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-xl" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <FaBars className="text-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ToggleButton; 