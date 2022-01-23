import styles from "../styles/Navbar.module.css";
import Link from "next/link";
function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">Panhchana</Link>
      <ul className={styles.listItem}>
        <li className={styles.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
