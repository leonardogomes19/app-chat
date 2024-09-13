'use client';

import { FC, useEffect, useState } from 'react';
import '../../public/locales/i18n'; // Importa a configuração do i18n
import { useTranslation } from 'next-i18next';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import Header from '../components/Header';
import axios from 'axios';
//import Navbar from '../components/Navbar';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<{ text: string; id: number; sending: boolean; sentByUser: boolean }[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const cachedMessages = localStorage.getItem('chatMessages');
    if (cachedMessages) {
      setMessages(JSON.parse(cachedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (msg: string) => {
    const id = Date.now();
    
    // Adiciona a mensagem do usuário ao estado
    setMessages((prev) => [...prev, { text: msg, id, sending: false, sentByUser: true }]);

    // Adiciona um marcador para a mensagem que está sendo enviada
    setMessages((prev) => [...prev, { text: '', id: id + 1, sending: true, sentByUser: false }]);
  
    try {
      // Envia a mensagem para a API
      const response = await axios.post('/api/chat', {
        message: msg
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      const simulatedMessage = response.data.text.trim();
  
      // Atualiza a mensagem recebida da API e marca como não enviando
      setMessages((prev) =>
        prev.map((message) =>
          message.id === id + 1 ? { ...message, text: simulatedMessage, sending: false } : message
        )
      );
    } catch (error) {
      console.error('Erro ao obter a resposta do OpenAI:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'dark' : ''}`}>
      {/* <Navbar /> */}
      <Header />
      <main className={`flex-grow p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <ChatWindow messages={messages} setMessages={setMessages} />
      </main>
      <footer className="p-4 bg-gray-200 dark:bg-gray-700">
        <MessageInput onSend={handleSend} onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </footer>
    </div>
  );
}
