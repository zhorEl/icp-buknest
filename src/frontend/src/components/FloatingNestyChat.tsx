import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Minimize2 } from 'lucide-react';
import { ChatMessage } from '../types';

export default function FloatingNestyChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm NESTY, your friendly AI companion! 🌸 How can I help you today?",
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let aiResponse = '';
      
      if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
        aiResponse = "Hello there! I'm here to help you with any questions about your child's development. What would you like to know?";
      } else if (userMessage.toLowerCase().includes('help')) {
        aiResponse = "I'm here to support you! I can help with developmental concerns, connect you with professionals, or guide you through our services. What specific area would you like help with?";
      } else if (userMessage.toLowerCase().includes('assessment')) {
        aiResponse = "I'd be happy to help you with an assessment! I can guide you through questions about your child's development. Would you like to start a comprehensive assessment?";
      } else if (userMessage.toLowerCase().includes('professional')) {
        aiResponse = "Great! I can help you find the right professional for your child's needs. What type of specialist are you looking for - speech therapist, occupational therapist, or developmental pediatrician?";
      } else {
        aiResponse = "That's a great question! I'm here to help you navigate your child's developmental journey. Can you tell me more about what you're looking for?";
      }

      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    simulateAIResponse(inputMessage);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const restoreChat = () => {
    setIsMinimized(false);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <div className="fixed z-50 bottom-6 right-6">
          <button
            onClick={toggleChat}
            className="group relative bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-float"
          >
            <img src="/NESTY.svg" alt="NESTY" className="w-8 h-8" />
            
            {/* Floating Caption */}
            <div className="absolute right-0 mb-3 transition-opacity duration-300 opacity-0 pointer-events-none bottom-full group-hover:opacity-100">
              <div className="px-4 py-2 text-sm font-bold text-gray-800 bg-white border border-gray-200 shadow-lg rounded-2xl whitespace-nowrap font-handwritten">
                Talk with NESTY
                <div className="absolute w-0 h-0 border-t-4 border-l-4 border-r-4 border-transparent top-full right-4 border-t-white"></div>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
        }`}>
          <div className="flex flex-col h-full overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-3xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#CB748E] to-[#698a60] p-4 flex items-center justify-between">
              <div className="flex items-center">
                <img src="/NESTY.svg" alt="NESTY" className="w-6 h-6 mr-3" />
                <div>
                  <h3 className="font-bold text-white font-handwritten">NESTY</h3>
                  {!isMinimized && (
                    <p className="font-sans text-xs text-white text-opacity-90">Your AI companion</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!isMinimized ? (
                  <>
                    <button
                      onClick={minimizeChat}
                      className="p-1 text-white transition-colors rounded-full hover:bg-white hover:bg-opacity-20"
                    >
                      <Minimize2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={toggleChat}
                      className="p-1 text-white transition-colors rounded-full hover:bg-white hover:bg-opacity-20"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={restoreChat}
                    className="px-3 py-1 font-sans text-sm text-white transition-colors rounded-full hover:bg-white hover:bg-opacity-20"
                  >
                    Restore
                  </button>
                )}
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gradient-to-br from-pink-50 via-rose-50 to-green-50">
                  {/* NESTY Introduction */}
                  <div className="flex flex-col items-center py-6 border-b border-pink-200">
                    <div className="flex items-center justify-center w-20 h-20 mb-4 border-4 border-white rounded-full shadow-lg bg-gradient-to-br from-pink-200 to-green-200">
                      <img src="/NESTY.svg" alt="NESTY" className="w-12 h-12" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-800 font-handwritten">NESTY</h3>
                    <p className="font-sans text-sm text-center text-gray-600">
                      We're here to support you and your child's developmental journey.
                    </p>
                  </div>
                  
                  {/* Today Divider */}
                  <div className="text-center">
                    <span className="px-3 py-1 font-sans text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">
                      Today
                    </span>
                  </div>
                  
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-xs ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md border-2 border-white ${
                          message.type === 'user' ? 'bg-blue-600' : 'bg-gray-200'
                        }`}>
                          {message.type === 'user' ? (
                            <span className="text-xs font-bold text-white">U</span>
                          ) : (
                            <img src="/NESTY.svg" alt="NESTY" className="w-4 h-4" />
                          )}
                        </div>
                        <div className={`px-4 py-3 rounded-2xl shadow-md backdrop-blur-sm ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white'
                            : 'bg-white bg-opacity-95 text-gray-900 border-2 border-pink-200'
                        }`}>
                          <p className="font-sans text-sm leading-relaxed">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3">
                        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-200 border-2 border-white rounded-full shadow-md">
                          <img src="/NESTY.svg" alt="NESTY" className="w-4 h-4" />
                        </div>
                        <div className="px-4 py-3 bg-white border-2 border-gray-200 shadow-sm rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-pink-200 bg-gradient-to-r from-pink-50 to-green-50">
                  <div className="flex items-end space-x-3">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 font-sans text-sm bg-white border-2 border-pink-300 shadow-md resize-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-opacity-95 backdrop-blur-sm"
                      rows={2}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-4 py-3 rounded-2xl hover:from-pink-500 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg transform hover:scale-105 border-2 border-white border-opacity-20"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}