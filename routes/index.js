var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('/index');
});

router.get('/index', function(req, res, next) {
  res.sendFile('index/index.html');
});

module.exports = router;
