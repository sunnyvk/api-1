let mongoose = require('mongoose')

let employeeForms = new mongoose.Schema({
    username: String,
    image: String,
    FullName: String,
    EmailAddress: String,
    CountryCode: Number,
    ContactNumber: Number,
    whatsappNumber: Number,
    Gander: String,
    DateofBirth: Date,
    address: String,
    Area: String,
    city: String,
    resume: String,
    EmployeeCategory: String,
    PinCode: Number,
    State: String,
    PayoutType: String,
    Grade: String,
    loginAccess: Boolean,
    Anniversary: Date,
    JobDesignation: String,
    Department: String,
    Salary: Number,
    AdminRights: String,
    joiningDate: Date,
    EmployeeID: String,
    AttendanceID: String,
    AccountNo: Number,
    IFSC: String,
    PANCardNumber: String,
    AadharNumber: Number,
    PANCard: String,
    AadharCard: String,
    Comment: String,
    selected: String,
    status: Boolean,
    OfferLatter: String,
    AppoinmentLatter:String,
    Indexion: String
    

}, { timestamps: true })

module.exports = mongoose.model('employeeForms', employeeForms);