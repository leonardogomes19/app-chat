import { FC, useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importando ícones

interface DarkModeToggleProps {
  onToggle: () => void;
  darkMode: boolean;
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({ onToggle, darkMode }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full transition-colors duration-300 ${
        darkMode ? 'bg-gray-600 text-white' : 'bg-yellow-500 text-gray-900'
      }`}
    >
      {/* Exibir ícone de lua ou sol com base no estado darkMode */}
      {darkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeToggle;