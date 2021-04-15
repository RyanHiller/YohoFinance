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
          <Link to='/'>Watchlists</Link>
        </li>
        <li className={styles.Item}>
          <Link to='/'>My Portfolio</Link>
        </li>
        <li className={styles.Item}>
          <Link to='/'>Screeners</Link>
        </li>
        <li className={styles.Item}>
          <Link to='/'>Yoho Finance Plus</Link>
        </li>
        <li className={styles.Item}>
          <Link to='/'>Markets</Link>
        </li>
        <li className={styles.Item}>
          <Link to='/'>News</Link>
        </li>
        <li className={styles.Item}>
          <Link to='/'>Personal Finance</Link>
        </li>
        <li className={styles.Item}>
          <Link to='/'>Videos</Link>
        </li>
      </ul>
    </nav>
  );
}
