import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.NavList}>
        <li className={styles.Item}>
          <Link to='/'>Finance Home</Link>
        </li>
        <li className={styles.Item}>
          <a href='#'>Watchlists</a>
        </li>
        <li className={styles.Item}>
          <a href='#'>My Portfolio</a>
        </li>
        <li className={styles.Item}>
          <a href='#'>Screeners</a>
        </li>
        <li className={styles.Item}>
          <a href='#'>Yoho Finance Plus</a>
        </li>
        <li className={styles.Item}>
          <a href='#'>Markets</a>
        </li>
        <li className={styles.Item}>
          <a href='#'>News</a>
        </li>
        <li className={styles.Item}>
          <a href='#'>Personal Finance</a>
        </li>
        <li className={styles.Item}>
          <a href='#'>Videos</a>
        </li>
      </ul>
    </nav>
  );
}
