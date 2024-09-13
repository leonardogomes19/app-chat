import React, { useState } from 'react';
import MessageInput from '../components/MessageInput';

export default {
  title: 'MessageInput',
  component: MessageInput,
};

export const Default = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleSend = (message: string) => {
    alert(`Message sent: ${message}`);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MessageInput
      onSend={handleSend}
      onToggleDarkMode={handleToggleDarkMode}
      darkMode={darkMode}
    />
  );
};