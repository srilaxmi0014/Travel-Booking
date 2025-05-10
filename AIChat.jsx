import React, { useState, useRef, useEffect } from 'react';
import '../styles/AIChat.css';

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const trimmedMessage = inputMessage.trim();
    if (trimmedMessage) {
      const newUserMessage = { text: trimmedMessage, sender: 'user' };
      setMessages((prev) => [...prev, newUserMessage]);
      setInputMessage('');

      setTimeout(() => {
        const aiReply = {
          text: `Your message was: "${trimmedMessage}"`,
          sender: 'ai',
        };
        setMessages((prev) => [...prev, aiReply]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-box">
        <h3>AI Assistance</h3>
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.sender === 'ai' ? 'ai-message' : 'user-message'}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
