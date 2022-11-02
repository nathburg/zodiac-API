const { Router } = require('express');
const { zodiac } = require('../zodiac-data');

module.exports = Router()
  .get('/', (req, res) => {
    const filteredData = zodiac.map(sign => {
      return { id: sign.id, name: sign.name };
    });
    res.json(filteredData);
  });
  