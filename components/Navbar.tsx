"use client";

import styles from "../css/navbar.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["300", "500", "700"], subsets: ["latin"] });
export default function Navbar() {
  return (
    <>
      <nav className={styles.main_nav + " " + inter?.className}>
        <div className="maxWidth dPadx h-100">
          <div className={styles.logo}>Logo</div>
          <div className={styles.menus}>
            <Link href={"/"} className={styles.menu_item}>
              Home
            </Link>
            <Link href={"/about"} className={styles.menu_item}>
              About
            </Link>
            <Link href={"/courses"} className={styles.menu_item}>
              Courses
            </Link>
            <div className={styles.menu_item}>Blog</div>
            <div className={styles.menu_item}>Contact</div>
          </div>
        </div>
      </nav>
    </>
  );
}
