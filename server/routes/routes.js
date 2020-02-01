const express = require('express');
const app = express();

app.use(require('./actors'));
app.use(require('./directors'));
app.use(require('./movies'));

module.exports = app;