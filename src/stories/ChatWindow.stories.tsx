import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';

export default {
  title: 'ChatWindow',
  component: ChatWindow,
};

const messagesData = [
  { text: 'Hello!', id: 1, sending: false, sentByUser: true },
  { text: 'How can I assist you?', id: 2, sending: false, sentByUser: false },
];

export const Default = () => {
  const [messages, setMessages] = useState(messagesData);

  return <ChatWindow messages={messages} setMessages={setMessages} />;
};