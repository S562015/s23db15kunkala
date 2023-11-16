// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('employee', { title: 'Search Results - Employees' });
// });

// module.exports = router;

var express = require('express');
const employee_controlers= require('../controllers/employee');
var router = express.Router();
/* GET costumes */
router.get('/', employee_controlers.employee_view_all_Page );
router.get('/detail', employee_controlers.employee_view_one_Page);
/* GET create costume page */
router.get('/create', employee_controlers.employee_create_Page);
/* GET create update page */
router.get('/update', employee_controlers.employee_update_Page);
/* GET delete costume page */
router.get('/delete', employee_controlers.employee_delete_Page);
module.exports = router;