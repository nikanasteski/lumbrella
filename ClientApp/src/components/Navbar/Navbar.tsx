import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Home</div>
      <ul className={styles.navLinks}>
        <li><a href="projects">Projects</a></li>
        <li><a href="event">Event calendar</a></li>
        <li><a href="about">About</a></li>
        <li><a href="contact">Contact us</a></li>
        <li><a href="login">Log in</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
