import classNames from "classnames";
import styles from "./message.module.css";
import { format } from "date-fns";
import { deleteMessage } from "../../../store/messages";
import { useDispatch } from "react-redux";

export function Message({ message, roomId }) {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <p>{message.author}</p>
      <h3>{message.message}</h3>
      <p>{format(new Date(message?.date), "yyyy-MM-dd HH:MM:SS")}</p>
      <button onClick={() => dispatch(deleteMessage(roomId, message?.id))}>
        x
      </button>
    </div>
  );
}
