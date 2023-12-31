let express = require('express');
let app = express();
let bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});


app.route('/name').get((req, res) => {
  let {first: firstName, last: lastName} = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
}).post((req, res) => {
  let {first: firstName, last: lastName} = req.body;
  res.json({
    name: `${firstName} ${lastName}`
  });
});


app.get('/:word/echo', (req, res) => {
  res.json({echo: req.params.word});
});


app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({time: req.time});
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/json', (req, res) => {
  let data = {
    message: process.env.MESSAGE_STYLE == 'uppercase' ? 'HELLO JSON' : 'Hello json' 
  };
  res.json(data);
});


app.use('/public', express.static(__dirname + '/public'));





























 module.exports = app;
