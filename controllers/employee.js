var Employee = require('../models/employeeSchema');
// List of all Costumes
exports.employee_list = function(req, res) {
res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.employee_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.employee_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.employee_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.employee_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
