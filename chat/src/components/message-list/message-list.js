import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import styles from "./message-list.module.css";
import { useParams } from "react-router-dom";

export const MessageList = () => {
  const { roomId } = useParams();
  const ref = useRef(null);
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList((state) => ({
          ...state,
          [roomId]: [
            ...(state[roomId] ?? []),
            { author, message, date: new Date() },
          ],
        }));
        setValue("");
      }
    },
    [roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author === "User") {
      setTimeout(() => {
        sendMessage("Привет!", "Bot");
      }, 500);
    }
  }, [messageList, roomId, sendMessage]);
  const messages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <Input
        className={styles.input}
        fullWidth
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handlePressInput}
        placeholder="Введите сообщение"
        value={value}
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send
                onClick={() => sendMessage(value)}
                className={styles.icon}
              />
            )}
          </InputAdornment>
        }
      />
    </>
  );
};
