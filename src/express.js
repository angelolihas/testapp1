var mysql = require('mysql');
var express = require('express');
var app = express();


var connection = mysql.createConnection({
    host: 'A-SERVER',
    user: 'username',
    password: 'password',
    database: 'A-SERVER Database',
});


app.post('/users', function(req, res) {
    var user = req.body;
    var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
    });
    res.end('Success');
});

app.listen(3001, function() {
    console.log('Example app listening on port 3001!');
});