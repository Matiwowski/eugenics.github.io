const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
    patientName: String,
    dob: Date,
    phone: String,
    purpose: String,
    appointmentDate: Date,
    appointmentTime: String,
    doctor: String,
});

module.exports = mongoose.model('Visit', visitSchema);