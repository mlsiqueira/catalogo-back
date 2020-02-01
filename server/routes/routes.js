const express = require('express');
const app = express();

app.use(require('./movies'));

module.exports = app;