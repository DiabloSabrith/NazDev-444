'use client';
import { useState } from 'react';
import  styles from "./styles.module.scss"
import Circles from "@/components/circles-anim/circles-anim"
export default function ChatPage() {
  const [userMessage, setUserMessage] = useState('');
  const [botReply, setBotReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setBotReply(data.reply || 'Нет ответа от сервера');
    } catch (err) {
      setBotReply('Ошибка при отправке сообщения');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentAi}>
        <h1 className={styles.h1}>Naz AI</h1>
        <span className={styles.span}>Это чат-бот, созданный на базе OpenRouter AI. Он поможет быстро получить ответ на ваш вопрос по курсам.</span>
        <input
           className={styles.input}
           placeholder="Есть вопрос по курсу?"
           value={userMessage}
           onChange={(e) => setUserMessage(e.target.value)}
        />

        <button
          className={styles.btn}
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? 'Отправка...' : 'Отправить'}
        </button>

        {botReply && (
          <div className={styles.responseBlock}>
            <p className={styles.p}>{botReply}</p>
          </div>
        )}
      </div>
      <Circles/>
    </div>
  
  );
}
