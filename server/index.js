const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { pgsql, mongodb } = require('../database');

const PORT = process.env.PORT || 3001;

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(PORT, (err) => {
  console.log(err ? err : `Listening on port %d...${PORT}`);
});
