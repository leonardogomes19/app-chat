import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importando useTranslation para tradução
import dynamic from 'next/dynamic';
//import DarkModeToggle from './DarkModeToggle';
interface MessageInputProps {
  onSend: (message: string) => void;
  onToggleDarkMode: () => void;
  darkMode: boolean; // Prop para passar o estado do modo escuro
}

// Carregando o DarkModeToggle dinamicamente
const DynamicDarkModeToggle = dynamic(() => import('./DarkModeToggle'), {
  ssr: false,  // Desabilita SSR para componentes dependentes de APIs do navegador
});

const MessageInput: FC<MessageInputProps> = ({ onSend, onToggleDarkMode, darkMode }) => {
  const { t } = useTranslation(); // Usando useTranslation para obter a função de tradução
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex items-center space-x-2 p-2">
      <input
        type="text"
        className={`flex-grow p-2 border rounded dark:bg-gray-700 dark:text-white ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
        }`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={t('enterMessage')} // Usando tradução para o placeholder
      />
      <button
        onClick={handleSend}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {t('sendButton')} {/* Usando tradução para o texto do botão */}
      </button>
      <DynamicDarkModeToggle onToggle={onToggleDarkMode} darkMode={darkMode} /> {/* Carregado dinamicamente */}
    </div>
  );
};

export default MessageInput;