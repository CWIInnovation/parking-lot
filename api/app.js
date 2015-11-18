var port = process.env.port || 1337;

var express = require('express');

var vehicle = require('./routes/vehicle');

var app = express();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Cache-Control', 'no-cache');
  next();
});

app.use('/Vehicle', vehicle);

app.get('/', function (req, res) {
    res.json({routes: ['/Vehicle', '/Vehicle/{licensePlate}']});
});

app.listen(port);

module.exports = app;