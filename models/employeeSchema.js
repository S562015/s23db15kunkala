const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    emp_name: String,
    emp_dept: String,
    emp_id: Number
})
module.exports = mongoose.model("Employee",employeeSchema)