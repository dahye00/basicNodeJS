var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'root',
    password: '1111',
    database: 'node_db'
})

router.get('/', function(req, res, next) {
    client.query('SELECT * FROM member;', function(err, result, fields) {
        if(err) console.log('쿼리문에 오류가 있습니다.');
        else res.json(result);
    });
});

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
