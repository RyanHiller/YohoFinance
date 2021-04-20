import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import QuoteHeader from '../../components/QuoteHeader/QuoteHeader'

import styles from './Quote.module.css';

export default function Quote(props) {
  const { symbol } = useParams();
  const [ticker, setTicker] = React.useState({});
  const [time, setTime] = React.useState(Date.now());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 30000);
    return () => {
      clearInterval(interval);
    }
  }, []);
  
  React.useEffect(() => {
    axios
      .get('http://localhost:3333/api/quote', { params: { input: symbol } })
      .then((res) => {
        setTicker(res.data);
      })
      .catch(alert);
  }, [symbol, time]);

  

  return ticker.price ? (
    <div className={styles.Quote}>
      <QuoteHeader ticker={ticker.price} />
    </div>
  ) : null;
}
