const express = require('express');
const yf = require('yahoo-finance');

const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







yf.quote({
  symbol: '^DJI',
  modules: ['price']
}, (err, quote) => {
  err ? console.log(err) : console.log(quote);
});