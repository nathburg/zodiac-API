const { Router } = require('express');
const { horoscopes } = require('../horoscope-data');

module.exports = Router()
  .get('/:sign', (req, res) => {
    const description = horoscopes[req.params.sign];
    return res.send(description);
  })
  
  .get('/', (req, res) => {
    return res.send('Add your sign to the end of this route, e.g. /horoscopes/aries.');
  });
