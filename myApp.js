let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  let data = {
    message: "Hello json"
  };
  res.json(data);
});

app.use('/public', express.static(__dirname + '/public'));





























 module.exports = app;
