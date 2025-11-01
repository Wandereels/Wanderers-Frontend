import React, { useState, FormEvent } from 'react';
import { PaperAirplaneIcon } from '../components/icons/AppIcons';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: "Hello! I'm your travel AI assistant. How can I help you plan your next adventure today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = { sender: 'ai', text: `I'm processing your request about "${input}". Please give me a moment...` };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Talk to AI Assistant</h2>
        <p className="text-sm text-gray-500">Your personal guide for travel planning</p>
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-lg px-4 py-2 rounded-lg ${
              msg.sender === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSend} className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about destinations, itineraries, or travel tips..."
            className="flex-1 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
            disabled={!input.trim()}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;