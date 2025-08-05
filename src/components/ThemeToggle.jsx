import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Switch } from './ui/switch';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <FaSun className="h-4 w-4 text-yellow-500" />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
      />
      <FaMoon className="h-4 w-4 text-blue-500" />
    </div>
  );
};

export default ThemeToggle; 