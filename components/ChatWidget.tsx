import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { chatWithGemini } from '../services/gemini';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welkom bij Van Dee AI Solutions. Hoe kan ik u helpen uw bedrijfsprocessen te optimaliseren?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Show tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowTooltip(false);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const response = await chatWithGemini(userMsg, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "Error" }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-4 mr-2 bg-white text-black px-4 py-2 rounded-xl rounded-br-none shadow-lg animate-fade-in relative max-w-[200px] hidden sm:block">
          <p className="text-sm font-semibold">Kan ik helpen uw besparing te berekenen?</p>
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 bg-gray-200 rounded-full p-0.5 hover:bg-gray-300"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[350px] h-[70vh] sm:h-[500px] max-h-[500px] glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-neon-cyan/30 origin-bottom-right transition-all">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-display font-bold text-sm tracking-wider">Van Dee Assistent</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-neon-cyan/20 text-white border border-neon-cyan/20 rounded-tr-none' 
                    : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'
                }`}>
                  {msg.role === 'model' && <Bot size={16} className="mb-1 text-neon-purple inline-block mr-2" />}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-lg rounded-tl-none flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-neon-cyan" />
                  <span className="text-xs text-gray-400">Analyseren...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-900/80 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Stel uw vraag..."
              className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 bg-neon-cyan text-black rounded-lg hover:bg-cyan-300 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan shadow-[0_0_20px_rgba(188,19,254,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-all duration-300"
        aria-label={isOpen ? "Sluit AI-assistent chat" : "Open AI-assistent chat"}
        aria-expanded={isOpen}
      >
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20"></span>
        {isOpen ? <X size={24} className="text-black" /> : <MessageSquare size={24} className="text-black" />}
      </button>
    </div>
  );
};