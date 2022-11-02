const express = require('express');
const path = require('path');
const app = express();

app.use('/', (req, res) => {
  res.send('hello world!');
});

module.exports = app;
