const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    patient: { type: String, required: true },
    doctor: { type: String, required: true },
    description: { type: String }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;