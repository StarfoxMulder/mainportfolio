var express = require('express');
var router = express.Router();

///// Route to Landing Page \\\\\
router.get('/', function (req, res) {
   res.render('index');
});

router.get('/about', function (req, res) {
  res.render('about');
});

router.get('/portfolio', function (req, res) {
  res.render('portfolio');
});


module.exports = router;
