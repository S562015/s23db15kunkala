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

// Handle Employee delete form on DELETE.
exports.employee_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Employee.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Employee update form on PUT.
exports.employee_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Employee.findById( req.params.id)
    // Do updates of properties
    if(req.body.emp_name) toUpdate.emp_name = req.body.emp_name;
    if(req.body.emp_dept) toUpdate.emp_dept = req.body.emp_dept;
    if(req.body.emp_id) toUpdate.emp_id = req.body.emp_id;
    let result = await toUpdate.save();
    console.log("Success " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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

// Handle a show one view with id specified by query
exports.employee_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Employee.findById( req.query.id)
    res.render('employedetail',
    { title: 'Employee Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.employee_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('employeecreate', { title: 'Employee Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a Employee.
// query provides the id
exports.employee_update_Page = async function(req, res) {
    console.log("update view for Employee "+req.query.id)
    try{
    let result = await Employee.findById(req.query.id)
    res.render('employeeupdate', { title: 'Employee Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.employee_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Employee.findById(req.query.id)
    res.render('employeedelete', { title: 'Employee Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};