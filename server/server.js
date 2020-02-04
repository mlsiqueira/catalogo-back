const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/config');
require('./database/database');

const publicPath = path.resolve(__dirname, '../public');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: false })); 
app.use(require('./routes/routes'));
app.use(express.static(publicPath));

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}\n`);
});