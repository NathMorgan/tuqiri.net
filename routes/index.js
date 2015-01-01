var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Nathan Morgan - Web Developer' });
});

router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Nathan Morgan - Web Developer' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'Nathan Morgan - Web Developer' });
});

router.get('/portfolio', function(req, res) {
    res.render('portfolio', { title: 'Nathan Morgan - Web Developer' });
});

router.get('/skills', function(req, res) {
    res.render('skills', { title: 'Nathan Morgan - Web Developer' });
});

module.exports = router;
