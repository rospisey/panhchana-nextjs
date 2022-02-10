import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
function Navbar() {
  const [open,setOpen]= useState(false)
  return (
    <div className="bg-black h-50px text-white flex items-center justify-between overflow-hidden relative">
      <Link href="/">Panhchana</Link>
      <ul className="">
        <li className="m-5">
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
      <div className={styles.hamburger} onClick={()=> setOpen(!open)}>
        <div className={styles.line}/>
        <div className={styles.line}/>
        <div className={styles.line}/>
      </div>
      <ul onClick={()=> setOpen(false)} className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
        <li className={styles.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
