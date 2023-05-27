import styles from "../css/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.main_nav + " "}>
        <div className="maxWidth dPadx h-100">
          <div className={styles.logo}>Logo</div>
          <div className={styles.menus}>
            <div className={styles.menu_item}>Home</div>
            <div className={styles.menu_item}>About</div>
            <div className={styles.menu_item}>Courses</div>
            <div className={styles.menu_item}>Blog</div>
            <div className={styles.menu_item}>Contact</div>
          </div>
        </div>
      </nav>
    </>
  );
}
