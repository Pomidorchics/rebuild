import React, { useState } from 'react';
import '../styles/Block8.css';
import logo from "../assets/logo_header.png";

function Questions() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Как быстро готовы начать?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      question: "По какому графику работаете?",
      answer: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },
    {
      id: 3,
      question: "Можно ли закупить материалы через вас?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 4,
      question: "Как формируется цена?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  const handleQuestionClick = (questionId) => {
    if (selectedQuestion === questionId) {
      setSelectedQuestion(null); // закрыть ответ если кликнули повторно
    } else {
      setSelectedQuestion(questionId); // показать ответ
    }
  };

  return (
    <section className="chat-section" id="faq">
      <h2 className="chat-title">Часто задаваемые вопросы</h2>
      
      <div className="telegram-chat">
        {/* Шапка чата как в Telegram */}
        <div className="chat-header">
          <div className="chat-avatar">
            <div className="avatar-placeholder">
              <img
                src={logo}
                alt={""}
              />
            </div>
          </div>
          <div className="chat-info">
            <h3 className="chat-name">СК "Перестройка"</h3>
            <p className="chat-status">онлайн</p>
          </div>
        </div>

        <div className="chat-messages">
          {/* Сначала все вопросы */}
          {questions.map((item) => (
            <div key={item.id} className="message-container">
              <div 
                className={`message question-message ${selectedQuestion === item.id ? 'selected' : ''}`}
                onClick={() => handleQuestionClick(item.id)}
              >
                <div className="message-content">
                  <p>{item.question}</p>
                  <span className="message-time">12:30</span>
                  <div className="message-status">✓✓</div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Затем ответ на выбранный вопрос в конце чата */}
          {selectedQuestion && (
            <div className="message-container">
              <div className="message answer-message">
                <div className="message-content">
                  <p>{questions.find(q => q.id === selectedQuestion)?.answer}</p>
                  <span className="message-time">12:31</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="chat-input-container">
          <div className="chat-input">
            <button className="message-input">
              Задать свой вопрос...
            </button>
            <button className="send-button">&#9658;</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;