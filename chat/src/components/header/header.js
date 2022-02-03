import styles from "./header.module.css";
import { Link } from "react-router-dom";

const pages = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
];

export function Header() {
  return (
    <div className={styles.header}>
      <h1>Menu</h1>
      <div>
        {pages.map(({ to, title }) => (
          <button key={title}>
            <Link className={styles.link} to={to}>
              {title}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
}
