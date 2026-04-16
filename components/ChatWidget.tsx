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
        <div className="mb-4 mr-2 bg-white text-slate-800 px-4 py-2 rounded-xl rounded-br-none shadow-md animate-fade-in relative max-w-[200px] hidden sm:block border border-gray-100">
          <p className="text-sm font-semibold">Kan ik helpen uw besparing te berekenen?</p>
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 bg-gray-100 rounded-full p-0.5 hover:bg-gray-200"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[350px] h-[70vh] sm:h-[500px] max-h-[500px] bg-white rounded-2xl flex flex-col overflow-hidden shadow-lg border border-gray-200 origin-bottom-right transition-all">
          {/* Header */}
          <div className="p-4 bg-brand-600 border-b border-brand-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-bold text-sm tracking-wider text-white">Van Dee Assistent</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-700 border border-gray-100 shadow-sm rounded-tl-none'
                }`}>
                  {msg.role === 'model' && <Bot size={16} className="mb-1 text-brand-600 inline-block mr-2" />}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm p-3 rounded-lg rounded-tl-none flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-brand-600" />
                  <span className="text-xs text-slate-500">Analyseren...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Stel uw vraag..."
              className="flex-1 bg-surface-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-brand-600 transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-brand-600 shadow-md hover:shadow-lg hover:bg-brand-700 transition-all duration-300"
        aria-label={isOpen ? "Sluit AI-assistent chat" : "Open AI-assistent chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
      </button>
    </div>
  );
};
