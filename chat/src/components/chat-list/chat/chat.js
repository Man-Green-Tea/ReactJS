import { ListItem, ListItemText } from "@mui/material";
import styles from "./chat.module.css";
export function Chat({
  title,
  selected,
  handleListItemClick,
  deleteConversationByName,
}) {
  return (
    <ListItem
      className={styles.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <button onClick={() => deleteConversationByName(title)}>x</button>
      <ListItemText className={styles.text} primary={title} />
    </ListItem>
  );
}
