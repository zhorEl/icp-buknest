import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ArrowRight, Calendar, Users } from 'lucide-react';
import { ChatMessage } from '../types';

interface AIAssessmentProps {
  onPageChange: (page: string) => void;
}

export default function AIAssessment({ onPageChange }: AIAssessmentProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm NESTY, your friendly AI companion! 🌸 I'm here to create a safe, welcoming space where you can share your concerns about your child's development. Through our gentle conversation, I'll help identify early signs and provide personalized guidance to support your child's unique journey. No judgment, just understanding and support.",
      timestamp: new Date().toISOString()
    },
    {
      id: '2',
      type: 'ai',
      content: "Let's start with some basic information. What is your child's age, and what specific concerns or challenges have you noticed? Remember, this is completely free, confidential, and no registration is required.",
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [assessmentResults, setAssessmentResults] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  };

  useEffect(() => {
    // Delay scroll to ensure DOM is updated
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let aiResponse = '';
      const messageCount = messages.filter(m => m.type === 'user').length;
      
      if (messageCount === 1) {
        aiResponse = "Thank you for sharing that information. Can you tell me more about your child's communication abilities? For example, do they use words, gestures, or other ways to express their needs?";
      } else if (messageCount === 2) {
        aiResponse = "I understand. How does your child interact with others? Do they make eye contact, respond to their name, or show interest in playing with other children?";
      } else if (messageCount === 3) {
        aiResponse = "That's helpful information. Are there any specific activities or situations that seem particularly challenging for your child? For example, transitions, loud noises, or changes in routine?";
      } else if (messageCount === 4) {
        // Complete assessment
        setAssessmentComplete(true);
        setAssessmentResults({
          concerns: ['Communication delays', 'Social interaction challenges', 'Sensory sensitivities'],
          recommendations: ['Speech therapy evaluation', 'Occupational therapy assessment', 'Developmental pediatrician consultation'],
          severity: 'moderate',
          suggestedProfessionals: ['Speech Therapist', 'Occupational Therapist', 'Developmental Pediatrician']
        });
        aiResponse = "Thank you for providing this detailed information. Based on our conversation, I've prepared a comprehensive assessment summary for you. This will help you understand your child's needs and connect with the right professionals.";
      } else {
        aiResponse = "I understand. Is there anything else you'd like to share about your child's development or behavior?";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-green-50">
      {/* NESTY Header */}
      <div className="bg-gradient-to-r from-[#d698ab] via-[#CB748E] to-[#698a60] text-white py-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-white rounded-full bg-opacity-10"></div>
        <div className="absolute right-0 w-24 h-24 translate-x-12 bg-white rounded-full top-4 bg-opacity-10"></div>
        <div className="absolute bottom-0 w-20 h-20 translate-y-10 bg-white rounded-full right-1/4 bg-opacity-10"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute opacity-25 top-12 left-20 animate-float-slow" style={{ transform: 'translateX(-26.4rem)', animationDelay: '3s' }}>
          <img src="/pattern/pattern light pink with green.svg" alt="" className="w-132 h-132" />
        </div>
        <div className="absolute top-20 right-16 opacity-22 animate-float-gentle" style={{ animationDelay: '8s', transform: 'translateX(24rem)' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-120 h-120" />
        </div>
        <div className="absolute bottom-12 left-32 opacity-28 animate-subtle-bounce" style={{ animationDelay: '12s', transform: 'translateX(-21.6rem)' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-108 h-108" />
        </div>
        <div className="absolute top-32 left-8 opacity-20 animate-float-gentle" style={{ animationDelay: '15s', transform: 'translateX(-19.2rem)' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-96 h-96" />
        </div>
        
        <div className="relative max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 mr-4 bg-white rounded-full bg-opacity-20 backdrop-blur-sm">
              <img src="/NESTY.svg" alt="NESTY" className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold md:text-5xl font-handwritten">
                <span className="text-white">Chat with </span><span className="text-yellow-300">NESTY!</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-xl text-white text-opacity-95" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Your safe space for early developmental assessment
            </p>
            <p className="text-lg leading-relaxed text-white text-opacity-90" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Share your concerns in a judgment-free environment. NESTY will guide you through gentle questions 
              to help identify early signs and provide personalized recommendations for your child's development.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-white border border-white border-opacity-50 shadow-xl bg-opacity-90 backdrop-blur-sm rounded-3xl">
          {/* Chat Container Floating Elements */}
          <div className="absolute -top-4 -right-4 opacity-22 animate-float-slow" style={{ transform: 'translateX(19.2rem)', animationDelay: '5s' }}>
            <img src="/pattern/pattern pink.svg" alt="" className="w-96 h-96" />
          </div>
          <div className="absolute -bottom-4 -left-4 opacity-20 animate-float-gentle" style={{ animationDelay: '10s', transform: 'translateX(-21.6rem)' }}>
            <img src="/pattern/pattern dark green.svg" alt="" className="w-108 h-108" />
          </div>
          <div className="absolute top-1/2 -right-6 opacity-18 animate-subtle-bounce" style={{ animationDelay: '7s', transform: 'translateX(16.8rem)' }}>
            <img src="/pattern/pattern light green.svg" alt="" className="w-84 h-84" />
          </div>
          
          {/* Chat Messages */}
          <div className="h-[70vh] min-h-[600px] max-h-[800px] overflow-y-auto p-8 space-y-6 relative scroll-smooth">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 animate-gentle-pulse" style={{ transform: 'translateX(-14.4rem)', animationDelay: '2s' }}>
                <img src="/pattern/pattern light pink with green.svg" alt="" className="w-72 h-72" />
              </div>
              <div className="absolute top-32 right-16 animate-float-slow" style={{ transform: 'translateX(12rem)', animationDelay: '6s' }}>
                <img src="/pattern/pattern light green.svg" alt="" className="w-60 h-60" />
              </div>
              <div className="absolute bottom-20 left-20 animate-subtle-bounce" style={{ transform: 'translateX(-13.2rem)', animationDelay: '9s' }}>
                <img src="/pattern/pattern pink.svg" alt="" className="w-66 h-66" />
              </div>
              <div className="absolute bottom-40 right-12 animate-float-gentle" style={{ transform: 'translateX(10.8rem)', animationDelay: '13s' }}>
                <img src="/pattern/pattern dark green.svg" alt="" className="w-54 h-54" />
              </div>
            </div>
            
            {/* NESTY Introduction */}
            <div className="relative z-10 flex flex-col items-center py-8 border-b border-pink-200">
              <div className="relative w-32 h-32 mb-6 overflow-hidden border-4 border-white rounded-full shadow-xl bg-gradient-to-br from-pink-200 to-green-200">
                <img src="/NESTY.svg" alt="NESTY" className="object-cover w-full h-full" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-800 font-handwritten">NESTY</h3>
              <p className="max-w-md font-sans text-center text-gray-600">
                We're here to support you and your child's developmental journey.
              </p>
            </div>
            
            {/* Today Divider */}
            <div className="relative z-10 text-center">
              <span className="px-4 py-2 font-sans text-sm font-semibold text-gray-600 bg-gray-200 rounded-full">
                Today
              </span>
            </div>
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn relative z-10`}
              >
                <div className={`flex items-start space-x-4 max-w-sm lg:max-w-lg ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${
                    message.type === 'user' ? 'bg-blue-600' : 'bg-gray-200'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                     <img src="/NESTY.svg" alt="NESTY" className="object-cover w-full h-full" />
                    )}
                  </div>
                  <div className={`px-5 py-4 rounded-2xl shadow-lg backdrop-blur-sm ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white'
                      : 'bg-white bg-opacity-95 text-gray-900 border-2 border-pink-200'
                  }`}>
                    <p className="text-base leading-relaxed font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-full shadow-md bg-gradient-to-r from-pink-200 to-green-200">
                   <img src="/NESTY.svg" alt="NESTY" className="object-cover w-full h-full" />
                  </div>
                  <div className="px-5 py-4 bg-white border-2 border-gray-200 shadow-sm rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Assessment Results */}
          {assessmentComplete && assessmentResults && (
            <div className="border-t border-pink-200 p-6 bg-gradient-to-r from-pink-50 to-green-50 max-h-[35vh] overflow-y-auto scroll-smooth">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Assessment Summary</h3>
              
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium text-gray-900">Key Concerns Identified:</h4>
                  <ul className="space-y-1">
                    {assessmentResults.concerns.map((concern: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#CB748E] to-[#698a60] rounded-full mr-2"></div>
                        {concern}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="mb-2 font-medium text-gray-900">Recommended Professionals:</h4>
                  <ul className="space-y-1">
                    {assessmentResults.suggestedProfessionals.map((professional: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 mr-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400"></div>
                        {professional}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => onPageChange('professionals')}
                  className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-semibold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-handwritten"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Find Professionals
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button
                  onClick={() => onPageChange('bookings')}
                  className="flex items-center justify-center px-6 py-3 font-semibold text-green-700 transition-all duration-300 bg-white border-2 border-pink-300 bg-opacity-80 rounded-2xl hover:bg-pink-50 font-handwritten"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </button>
              </div>
            </div>
          )}

          {/* Input Area */}
          {!assessmentComplete && (
            <div className="relative p-6 border-t border-pink-200 bg-gradient-to-r from-pink-50 to-green-50">
              {/* Input area decorative elements */}
              <div className="absolute top-2 right-4 opacity-15 animate-gentle-pulse" style={{ animationDelay: '4s' }}>
                <img src="/pattern/pattern pink.svg" alt="" className="w-48 h-48" />
              </div>
              
              <div className="flex items-end space-x-4">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share your thoughts with NESTY..."
                  className="flex-1 px-5 py-4 text-base bg-white border-2 border-pink-300 shadow-lg resize-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-opacity-95 font-readable backdrop-blur-sm"
                  style={{ fontFamily: 'Calibri, sans-serif' }}
                  rows={3}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-8 py-4 rounded-2xl hover:from-pink-500 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-handwritten shadow-xl transform hover:scale-105 border-2 border-white border-opacity-20"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <div className="relative p-4 bg-white border border-white border-opacity-50 shadow-lg bg-opacity-80 backdrop-blur-sm rounded-2xl">
            <div className="absolute -top-2 -right-2 opacity-18 animate-float-slow" style={{ transform: 'translateX(4.8rem)', animationDelay: '11s' }}>
              <img src="/pattern/pattern dark green.svg" alt="" className="w-24 h-24" />
            </div>
            <div className="absolute -bottom-2 -left-2 opacity-15 animate-subtle-bounce" style={{ transform: 'translateX(-4rem)', animationDelay: '16s' }}>
              <img src="/pattern/pattern light pink with green.svg" alt="" className="w-20 h-20" />
            </div>
            <p className="text-sm text-green-700 font-readable">
              This assessment is for informational purposes only and does not replace professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}