var express = require('express');
var mysql = require('mysql');
var router = express.Router();


var connection = mysql.createConnection({
    host     : 'e186db01-2dd9-4f74-949b-a54700d61c4a.mysql.sequelizer.com',
    user     : 'gfvmtelhmfiomtur',
    password : 'fzH5hYBtujHvsktqn5SUbSzRe4qhFdc8b73F6mCxREjJHf8s2cuGbbNuaYYnHuVq',
    database : 'dbe186db012dd94f74949ba54700d61c4a'
});

router.get('/', function (req, res) {

    connection.connect(function(err){
        connection.query('SELECT * from vehicle', function(err, rows, fields) {
          if (!err){
            console.log('The solution is: ', rows);
            res.json(rows);
          }
          else{
            console.log('Error while performing Query.');
            res.json(err);
          }
        });
    });
    
});

router.post('/', function (req, res) {
    connection.connect(function(err){
        connection.query('INSERT INTO vehicle SET ?', req.body, 
        function(err, rows, fields) {
          if (!err){
            console.log('The solution is: ', rows);
            res.json('OK');
          }
          else{
            console.log('Error while performing Query.');
            res.json(err);
          }
        });
    });
    
});

router.get('/:licensePlate', function (req, res) {
    res.json(data.filter(function (item) {
        return item.licensePlate == req.params.licensePlate
    })[0]);
});

module.exports = router;
