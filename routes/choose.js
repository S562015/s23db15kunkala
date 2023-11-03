var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('choose', { title: 'Choose Employees for Nagarjuna Reddy, Kunkala' });
});
 
module.exports = router;