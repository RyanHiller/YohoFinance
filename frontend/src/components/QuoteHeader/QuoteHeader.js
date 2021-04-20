import React, { useEffect } from 'react';

import styles from './QuoteHeader.module.css';

export default function QuoteHeader(props) {
  let rmChange, rmColor, rmPercent, rmPrice, rmSign, currentMarket;

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

  // Determine Premarket/Regular Market/After Hours
  function determineMarket() {
    let currentTime = new Date();
    currentTime.setMilliseconds(0);
    currentTime.setSeconds(0);
    for (let x = 1; x > 0; ) {
      let pmTime = new Date(props.ticker.preMarketTime);
      pmTime.setMilliseconds(0);
      pmTime.setSeconds(0);
      if (currentTime.getTime() === pmTime.getTime()) {
        currentMarket = 'PM';
        break;
      }

      let rmTime = new Date(props.ticker.regularMarketTime);
      rmTime.setMilliseconds(0);
      rmTime.setSeconds(0);
      if (currentTime.getTime() === rmTime.getTime()) {
        currentMarket = 'RM';
        break;
      }

      let ahTime = new Date(props.ticker.postMarketTime);
      ahTime.setMilliseconds(0);
      ahTime.setSeconds(0);
      if (currentTime.getTime() === ahTime.getTime()) {
        currentMarket = 'AH';
        break;
      }

      currentMarket = 'CL';
      break;
    }

    console.log(currentMarket);
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
            <div className={styles.RMPrice}>{rmPrice}</div>
            <div className={`${styles.RMChange} ${rmColor}`}>
              {rmSign}
              {rmChange}
            </div>
            <div className={`${styles.RMChange} ${rmColor}`}>
              ({rmSign}
              {rmPercent}%)
            </div>
          </div>
          <div className={styles.RMNotice}></div>
        </div>
        <div className={styles.PostPreMarket}>{}</div>
      </div>
    </div>
  );
}
