import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.menu}>
        <div className={styles.menu_icon}>
          <div className={styles.menu_div}></div>
          <div className={styles.menu_div}></div>
          <div className={styles.menu_div}></div>
        </div>
        <nav className={styles.menu_links}>
          <a className={styles.menu_links_a} href="#">
            Home
          </a>
          <a className={styles.menu_links_a} href="#">
            Produtos
          </a>
          <a className={styles.menu_links_a} href="#">
            Sobre
          </a>
          <a className={styles.menu_links_a} href="#">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
