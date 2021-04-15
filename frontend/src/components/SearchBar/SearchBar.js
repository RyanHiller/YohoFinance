import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const history = useHistory();

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    if (!(searchTerm.trim().length > 0)) {
      event.preventDefault();
      return;
    } else {
      event.preventDefault();
      const inputValue = searchTerm.trim().toUpperCase();
      history.push(`/quote/${inputValue}`);
    }
  }

  return (
    <form className={styles.SearchBar} onSubmit={handleSubmit}>
      <label>Search</label>
      <input
        aria-label='Search for news, symbols or companies'
        autoCapitalize='none'
        autoComplete='off'
        onChange={handleChange}
        placeholder='Search for news, symbols or companies'
        type='text'
        value={searchTerm}
      />
      <button type='submit'>O</button>
    </form>
  );
}
