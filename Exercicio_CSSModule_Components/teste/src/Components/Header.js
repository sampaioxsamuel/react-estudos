import React from "react";
import styles from "./Header.module.css";

const Header = ({ links }) => {
  return (
    <header>
      <nav className={styles.navbar}>
          {links.map((link) => (
            <div key={link.label}>
              <a href={link.link}>{link.label}</a>
            </div>
          ))}
      </nav>
    </header>
  );
};

export default Header;
