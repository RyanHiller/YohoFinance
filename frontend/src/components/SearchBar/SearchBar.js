import React from 'react';

import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <form className={styles.SearchBar}>
      <label>Search</label>
      <input
        aria-label='Search for news, symbols or companies'
        placeholder='Search for news, symbols or companies'
        autoCapitalize='none'
        autoComplete='off'
      />
      <button type="submit">O</button>
    </form>
  );
}
