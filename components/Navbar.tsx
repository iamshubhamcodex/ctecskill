"use client";

import styles from "../css/navbar.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FC, useState } from "react";

const inter = Inter({ weight: ["300", "500", "700"], subsets: ["latin"] });

export default function Navbar() {
  // const [active, setActive] = useState("Home");

  const Item: FC<{ path: string }> = ({ path }) => {
    let actP = path;
    if (path === "") actP = "Home";
    return (
      <Link href={"/" + path.toLowerCase()} className={styles.menu_item}>
        {actP}
      </Link>
    );
  };

  return (
    <>
      <nav className={styles.main_nav + " " + inter?.className}>
        <div className="maxWidth dPadx h-100">
          <div className={styles.logo}>Logo</div>
          <div className={styles.menus}>
            <Item path="" />
            <Item path="About" />
            <Item path="Courses" />
            <Item path="Blogs" />
            <Item path="Contact" />
          </div>
        </div>
      </nav>
    </>
  );
}
