import React, { useEffect } from 'react';

import styles from './QuoteHeader.module.css';

export default function QuoteHeader(props) {
  let rmChange,
    rmColor,
    rmPercent,
    rmPrice,
    rmSign,
    rmTimeNotice,
    currentMarket;

  const [rmStatus, setRMStatus] = React.useState('closed');

  React.useEffect(determineMarket, []);

  // Set horizontal rule's and change information's color
  if (props.ticker.regularMarketChange > 0) {
    rmColor = styles.Positive;
    rmSign = '+';
  } else if (props.ticker.regularMarketChange < 0) {
    rmColor = styles.Negative;
    rmSign = '';
  }

  // Format price length
  if (props.ticker.regularMarketPrice > 0.01) {
    rmChange = props.ticker.regularMarketChange.toFixed(2);
    rmPercent = props.ticker.regularMarketChangePercent * 100;
    rmPercent = rmPercent.toFixed(2);
    rmPrice = props.ticker.regularMarketPrice.toFixed(2);
  } else {
    rmChange = props.ticker.regularMarketChange.toFixed(4);
    rmPrice = props.ticker.regularMarketPrice.toFixed(4);
  }

  // Format RM Notice clock
  rmTimeNotice = new Date(props.ticker.regularMarketTime)
  rmTimeNotice = rmTimeNotice.toLocaleString('en-US', { timeZone: 'America/New_York' });
  rmTimeNotice = rmTimeNotice.split(' ');
  rmTimeNotice.shift();
  rmTimeNotice[0] = rmTimeNotice[0].slice(0, -3);
  rmTimeNotice = rmTimeNotice.join('') + ' EDT';

  // Determine Premarket/Regular Market/After Hours
  function determineMarket() {
    let currentTime = new Date();
    currentTime.setMilliseconds(0);
    currentTime.setSeconds(0);

    //This is a for loop so we can use break
    for (let x = 1; x > 0; ) {
      let pmTime = new Date(props.ticker.preMarketTime);
      pmTime.setMilliseconds(0);
      pmTime.setSeconds(0);
      if (currentTime.getTime() === pmTime.getTime()) {
        currentMarket = 'PM';
        setRMStatus('closed');
        break;
      }

      let rmTime = new Date(props.ticker.regularMarketTime);
      rmTime.setMilliseconds(0);
      rmTime.setSeconds(0);
      if (currentTime.getTime() === rmTime.getTime()) {
        currentMarket = 'RM';
        setRMStatus('open');
        break;
      }

      let ahTime = new Date(props.ticker.postMarketTime);
      ahTime.setMilliseconds(0);
      ahTime.setSeconds(0);
      if (currentTime.getTime() === ahTime.getTime()) {
        currentMarket = 'AH';
        setRMStatus('closed');
        break;
      }

      currentMarket = 'CL';
      setRMStatus('closed');
      break;
    }
  }

  return (
    <div className={styles.QuoteHeader}>
      <div className={`${styles.QuoteHRule} ${rmColor}`} />
      <div className={styles.Details}>
        <div className={styles.Name}>
          {props.ticker.longName || props.ticker.shortName} ({props.ticker.symbol})
        </div>
        <div className={styles.Exchange}>
          {props.ticker.exchangeName} - {props.ticker.quoteSourceName}. Currency in{' '}
          {props.ticker.currency}
        </div>
      </div>
      <div className={styles.Pricing}>
        <div className={styles.RegularMarket}>
          <div className={styles.RMPriceContainer}>
            <div className={styles.RMPrice}>
              {rmPrice}{' '}
              <span className={`${styles.RMChange} ${rmColor}`}>
                {rmSign}
                {rmChange} ({rmSign}
                {rmPercent}%)
              </span>
            </div>
            <div className={styles.RMNotice}>
              As of {new Date(props.ticker.regularMarketTime).toString()}
            </div>
          </div>
          <div className={styles.RMNotice}></div>
        </div>
        <div className={styles.PostPreMarket}>{}</div>
      </div>
    </div>
  );
}
