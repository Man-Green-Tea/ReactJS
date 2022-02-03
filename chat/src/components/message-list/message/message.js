import classNames from "classnames";
import styles from "./message.module.css";
import { format } from "date-fns";

export function Message({ message }) {
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <p>{message.author}</p>
      <h3>{message.message}</h3>
      <p>{format(message?.date, "yyyy-MM-dd HH:MM:SS")}</p>
    </div>
  );
}
