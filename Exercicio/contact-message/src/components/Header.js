import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" end activeClassName={styles.activeLink}>
        Home
      </NavLink>
      <NavLink to="contact" activeClassName={styles.activeLink}>
        Contact
      </NavLink>
      <NavLink to="messages" activeClassName={styles.activeLink}>
        Messages
      </NavLink>
    </header>
  );
};

export default Header;
