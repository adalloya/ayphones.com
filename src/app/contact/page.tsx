"use client";

import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

export default function ContactPage() {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: '¡Hola! Bienvenido a HayPhones. 👋', sender: 'bot' },
        { id: 2, text: 'Me encantaría ayudarte. Para empezar, ¿cuál es tu nombre?', sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState(0); // 0: Name, 1: Email, 2: Message, 3: Done
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = inputValue;
        setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: 'user' }]);
        setInputValue('');
        setIsTyping(true);

        // Process input based on current step
        setTimeout(() => {
            let botResponse = '';
            let nextStep = step;

            if (step === 0) {
                setFormData(prev => ({ ...prev, name: userMsg }));
                botResponse = `¡Un gusto, ${userMsg}! 🚀 ¿A qué correo electrónico puedo contactarte si se corta la comunicación?`;
                nextStep = 1;
            } else if (step === 1) {
                setFormData(prev => ({ ...prev, email: userMsg }));
                botResponse = '¡Perfecto! Ahora sí, cuéntame, ¿en qué puedo ayudarte hoy? (Dudas, compras, garantía...)';
                nextStep = 2;
            } else if (step === 2) {
                setFormData(prev => ({ ...prev, message: userMsg }));
                botResponse = '¡Entendido! Estoy enviando tu mensaje al equipo de soporte... 📨';
                nextStep = 3;

                // Simulate sending delay
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now() + 1,
                        text: '¡Listo! Tu mensaje ha sido enviado a contacto@ayphones.com. Nos pondremos en contacto contigo muy pronto. ⚡️',
                        sender: 'bot'
                    }]);
                }, 2000);
            }

            setMessages(prev => [...prev, { id: Date.now(), text: botResponse, sender: 'bot' }]);
            setStep(nextStep);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <main className={styles.main}>
            <Navbar />
            <div className="container">
                <div className={styles.chatContainer}>
                    <div className={styles.header}>
                        <h1 className="neon-text">Soporte HayPhones</h1>
                        <p>Estamos aquí para ayudarte.</p>
                    </div>

                    <div className={`${styles.chatBox} glass`}>
                        <div className={styles.messages}>
                            {messages.map(msg => (
                                <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
                                    <div className={styles.bubble}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className={`${styles.message} ${styles.bot}`}>
                                    <div className={styles.bubble}>
                                        <span className={styles.dot}></span>
                                        <span className={styles.dot}></span>
                                        <span className={styles.dot}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSend} className={styles.inputArea}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={step === 3 ? "Mensaje enviado" : "Escribe tu respuesta..."}
                                disabled={step === 3 || isTyping}
                                className={styles.input}
                                autoFocus
                            />
                            <button
                                type="submit"
                                disabled={step === 3 || isTyping || !inputValue.trim()}
                                className={styles.sendBtn}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.background} />
        </main>
    );
}
