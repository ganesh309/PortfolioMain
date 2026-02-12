import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User } from 'lucide-react';
const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
        { text: "Hi! I’m Ganesh’s intelligent portfolio assistant, built with modern reasoning-driven RAG architecture and secure serverless AI.\nAsk me anything about his experience, skills, or projects.", isBot: true }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userMessage = inputText;
        setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
        setInputText("");
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setMessages(prev => [...prev, { text: data.response, isBot: true }]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages(prev => [...prev, {
                text: "I'm sorry, I'm having trouble connecting to the server right now. Please try again later.",
                isBot: true
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                className="fixed bottom-0 right-6 z-[100] transform hover:scale-110 transition-all duration-300 w-24 h-24 flex items-center justify-center p-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <div className="bg-[rgb(19,63,122)] hover:bg-[rgb(19,63,122)]/90 rounded-full w-14 h-14 flex items-center justify-center transition-all border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        <X className="h-6 w-6 text-cyan-400" />
                    </div>
                ) : (
                    <img
                        src="/G-Insight-ai.png"
                        alt="G-Insight AI"
                        className="w-full h-full object-contain"
                    />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-20 right-6 w-80 sm:w-96 bg-[#0c0a0e]/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl z-[100] overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 p-4 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-black/30 rounded-full mr-3 border border-cyan-500/30">
                                    <Bot className="h-5 w-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold tracking-wide">G-Insight AI</h3>
                                    <p className="text-xs text-cyan-300 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[300px] custom-scrollbar bg-black/20">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                    {msg.isBot && (
                                        <div className="w-8 h-8 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center mr-2 flex-shrink-0">
                                            <Bot className="h-4 w-4 text-purple-300" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${msg.isBot
                                            ? 'bg-[#1a1625] border border-white/10 text-gray-200 rounded-tl-none'
                                            : 'bg-[rgb(19,63,122)] text-white rounded-tr-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                    {!msg.isBot && (
                                        <div className="w-8 h-8 rounded-full bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center ml-2 flex-shrink-0">
                                            <User className="h-4 w-4 text-cyan-300" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="w-8 h-8 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center mr-2 flex-shrink-0">
                                        <Bot className="h-4 w-4 text-purple-300" />
                                    </div>
                                    <div className="bg-[#1a1625] border border-white/10 text-gray-200 p-3 rounded-2xl rounded-tl-none">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-[#0c0a0e]">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Ask about Ganesh..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim() || isTyping}
                                    className="p-2 bg-[rgb(19,63,122)] text-white rounded-full hover:bg-[rgb(19,63,122)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChat;
