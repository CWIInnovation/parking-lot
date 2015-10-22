var port = process.env.port || 1337;

var express = require('express');
var vehicle = require('./routes/vehicle');

var app = express();

app.use('/Vehicle', vehicle);

app.get('/', function (req, res) {
    res.json({routes: ['/Vehicle', '/Vehicle/{licensePlate}']});
});

app.listen(port);

module.exports = app;