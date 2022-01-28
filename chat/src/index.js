import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Input,
  ThemeProvider,
  createTheme,
  Stack,
  Button,
  List,
  ListItem,
  Box,
} from "@mui/material";
import styles from "./index.module.css";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#0000ff",
//     },
//   },
// });
const ChatList = () => {
  const [chats] = useState(["room1", "room2", "room3"]);
};

const MessageList = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { author: "User", message }]);
      setMessage("");
    } else {
      alert("Вы не ввели сообщение!");
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (lastMessage?.author !== "Bot" && messages.length) {
      setTimeout(() => {
        setMessages([...messages, { author: "Bot", message: "Привет!" }]);
      }, 500);
    }
  }, [messages]);

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>MENU</h1>
      </div>
      <div className={styles.container}>
        <Box>
          <List>
            <ListItem>
              <h1>Чат 1</h1>
            </ListItem>
            <ListItem>
              <h1>Чат 2</h1>
            </ListItem>
            <ListItem>
              <h1>Чат 3</h1>
            </ListItem>
          </List>
        </Box>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div key={index}>
              <h2>{message.author}</h2>
              <p>{message.message}</p>
            </div>
          ))}
          ;
          <Input
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Введите сообщение"
            value={message}
          />
          {/* <button onClick={sendMessage}>Отправить</button> */}
          <Stack>
            <Button variant="outlined" onClick={sendMessage}>
              Отправить
            </Button>
          </Stack>
          <hr />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <MessageList />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
