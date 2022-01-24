import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './index.css';

const MessageList = () => {
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);

const sendMessage = () => {
  if(message) {
    setMessages([...messages, { author: "User", message }]);
    setMessage("");
  } else {
    alert("Вы не ввели сообщение!");
  };
};


useEffect(() => {
  const lastMessage = messages[messages.length - 1]

  if(lastMessage?.author !== "Bot" && messages.length) {
    setTimeout(() => {
      setMessages([...messages, { author: "Bot", message: "Привет!" }]);
    }, 500);
  }
}, [messages]);


  return (
    <div>
      <h1>Message List</h1>
      <input onChange={(event) => setMessage(event.target.value)} placeholder='Введите сообщение' value={message} />
      <button onClick={sendMessage}>Отправить</button>
      <hr />
      {messages.map((message) => (
        <div>
          <h2>{message.author}</h2>
          <p>{message.message}</p>
        </div>
      ))};
    </div>
  );
};

const App = () => {
  return (
    <MessageList />
  );
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
