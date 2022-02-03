import { ListItem, ListItemText } from "@mui/material";
import styles from "./chat.module.css";
export function Chat({ title, selected, handleListItemClick }) {
  return (
    <ListItem
      className={styles.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemText className={styles.text} primary={title} />
    </ListItem>
  );
}
