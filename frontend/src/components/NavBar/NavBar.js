import React from 'react';

import Navigation from '../Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';

import NavLogo from '../../images/yoho_finance2.png';

import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavTop}>
        <img className={styles.NavLogo} src={NavLogo} alt='Yoho Finance Logo' />
        <SearchBar />
        <div>{/* Auth ?*/}</div>
      </div>
      <div className={styles.NavBottom}>
        <Navigation />
        <div>yo!finance+</div>
      </div>
    </div>
  );
}
