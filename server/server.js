const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/config');
require('./database/database');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true })); 
app.use(require('./routes/routes'));

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}\n`);
});