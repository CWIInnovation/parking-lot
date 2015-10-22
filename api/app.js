var port = process.env.port || 1337;

var path = require('path');

var express = require('express');
var vehicle = require('./routes/vehicle');

var app = express();

app.use('/Veiculo', vehicle);

app.listen(port);

module.exports = app;