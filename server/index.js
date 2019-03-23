const path = require('path');
const express = require('express');
const request = require('request');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/events');

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
