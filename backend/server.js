require('dotenv').config();
const cors = require('cors');
const express = require('express');
const yf = require('yahoo-finance');

const app = express();
app.use(cors());
app.use(express.static('../frontend/build/'));

/**
 * URL: localhost:3333/
 * Description: Landing page for website
 */
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '../frontend/build/' });
});

/**
 * URL: localhost:3333/api/indices
 * Description: Returns JSON data for website header indices
 */
app.get('/api/indices', (req, res, next) => {
  const SYMBOLS = ['^GSPC', '^DJI', '^IXIC', '^RUT', 'BTC-USD', 'EURUSD=X', 'GC=F'];
  yf.quote({ symbols: SYMBOLS }, function (err, quote) {
    if (err) next(err);
    else res.json(quote);
  });
});

/**
 * URL: localhost:3333/api/quote
 * Description: Returns JSON data for specific ticker
 */
app.get('/api/quote', (req, res) => {
  req.query.input
    ? yf
        .quote({ symbol: req.query.input })
        .then((result) => {
          console.log(`API Call -- Quote -- ${req.query.input}`)
          res.json(result);
        })
        .catch(err => console.log(err))
    : null;
});

// Handle 404 redirect
app.use((req, res, next) => {
  res.status(404).sendFile('index.html', { root: '../frontend/build/' });
});

const { PORT } = process.env || 4001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//console.log(`API Call -- Quote -- ${req.query.input}`)
