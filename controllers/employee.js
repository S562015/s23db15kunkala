var Employee = require('../models/employeeSchema');
// List of all Employees
exports.employee_list = async function(req, res) {
    try{
    theEmployees = await Employee.find();
    res.send(theEmployees);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific Employee.
exports.employee_detail = async function(req, res) {
    console.log("Employee Id: " + req.params.id)
    try {
    result = await Employee.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle Costume create on POST.
exports.employee_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Employee();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.emp_name = req.body.emp_name;
    document.emp_dept = req.body.emp_dept;
    document.emp_id = req.body.emp_id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle Costume delete form on DELETE.
exports.employee_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.employee_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.employee_view_all_Page = async function(req, res) {
    try{
    theEmployees = await Employee.find();
    res.render('employee', { title: 'Employee Search Results', results: theEmployees });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };