import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useDispatch, useSelector } from "react-redux";
import styles from "./message-list.module.css";
import { useParams } from "react-router-dom";
import { messagesSelectorByRoomId, sendMessage } from "../../store/messages";

export const MessageList = () => {
  const { roomId } = useParams();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelectorByRoomId(roomId));
  const [value, setValue] = useState("");

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessage(roomId, { author: author || "Bot", message }));
        setValue("");
      }
    },
    [dispatch, roomId]
  );
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messages, handleScrollBottom]);

  // useEffect(() => {
  //   const lastMessage = messages[messages.length - 1];

  //   if (messages.length && lastMessage.author === "User") {
  //     setTimeout(() => {
  //       send("Привет!", "Bot");
  //     }, 500);
  //   }
  // }, [messages, roomId, send]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message key={index} message={message} roomId={roomId} />
        ))}
      </div>
      <Input
        className={styles.input}
        fullWidth
        onKeyPress={handlePressInput}
        placeholder="Введите сообщение"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send onClick={() => send(value)} className={styles.icon} />
            )}
          </InputAdornment>
        }
      />
    </>
  );
};
