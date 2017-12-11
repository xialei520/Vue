var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/', function(req, res, next) {
	console.log()
  res.render('index', {title: '123', username: req.session.username});
});

router.get('/login', function(req, res, next) {
   res.render("login", {});
});
router.get('/registor', function(req, res, next) {
   res.render("registor", {});
});

router.get('/logout', function(req, res, next) {
   req.session.username = undefined;
   res.redirect("/");
});
module.exports = router;
