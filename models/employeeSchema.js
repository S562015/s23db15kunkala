const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    emp_name: String,
    emp_dept: {
        type:String,
        enum:['Admin','Accounts','Recovery']
    },
    emp_id: {
        type:Number,
        min:10,
        max:25
    }
})
module.exports = mongoose.model("Employee",employeeSchema)