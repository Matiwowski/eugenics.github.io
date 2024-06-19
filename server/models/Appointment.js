// models/Appointment.js

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    dob: { type: Date, required: true },
    phone: { type: String, required: true },
    purpose: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    doctor: { type: String, required: true },
}, { collection: 'visits' }); // Upewnij się, że kolekcja to 'visits'

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
