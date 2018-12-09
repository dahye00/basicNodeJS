//새로운 라우터 등록
var express = require('express');
var router = express.Router();

router.get('/newReouter', function(req, res, next) {
    res.send('새로운 라우터가 등록되었습니다.')
});

module.exports = router;
