import React, { useState } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';

export default {
  title: 'DarkModeToggle',
  component: DarkModeToggle,
};

export const Default = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeToggle
      onToggle={handleToggle}
      darkMode={darkMode}
    />
  );
};