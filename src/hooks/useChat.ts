import { useState, useEffect } from 'react';

interface Message {
  text: string;
  isOwn: boolean;
  time: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [onlineUsers] = useState(Math.floor(Math.random() * 50) + 10);
  const [partner, setPartner] = useState<boolean>(false);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const newMessage: Message = {
      text: currentMessage,
      isOwn: true,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setCurrentMessage('');

    // Simulate partner response
    setTimeout(() => {
      const responses = [
        "That's interesting!",
        'Tell me more about that.',
        'I see what you mean.',
        'Really? That\'s cool!',
        'I had a similar experience.',
      ];
      const partnerMessage: Message = {
        text: responses[Math.floor(Math.random() * responses.length)],
        isOwn: false,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, partnerMessage]);
    }, Math.random() * 2000 + 500);
  };

  const findNewPartner = () => {
    setMessages([]);
    setPartner(true);
  };

  return {
    messages,
    currentMessage,
    setCurrentMessage,
    sendMessage,
    onlineUsers,
    partner,
    findNewPartner,
  };
}