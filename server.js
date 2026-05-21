const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/database');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// Allow the frontend React app to connect without getting blocked
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Set standard headers for the API requests (Removed the hardcoded JSON override)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});