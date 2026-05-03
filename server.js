const express = require('express');
const mongodb = require('./db/database');
const app = express();
const port = process.env.PORT || 8080;

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});