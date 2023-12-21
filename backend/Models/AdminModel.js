const Mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const AdminSchema = Mongoose.Schema({
    AdminName: {
        type: String,
        required:true
    },
    AdminEmail: {
        type: String,
        required:true
    },
    AdminPassword: {
        type: String,
        required:true
    },
    IsActive: {
        type: Boolean,
        default: false
    },
    OTP: {
        type: String,
       
    },
    Created_At: {
        type: Date,
        default : Date.now()
    }
})

AdminSchema.pre('save', function(next) {
    this.AdminPassword = bcrypt.hashSync(this.AdminPassword, 10)
    next()
})



const AdminModel = Mongoose.model('Admin_Details', AdminSchema); 
module.exports = AdminModel
