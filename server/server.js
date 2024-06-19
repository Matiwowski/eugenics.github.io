const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Upewnij się, że zamienisz <username>, <password>, i <dbname> na swoje dane
const dbURI = 'mongodb+srv://matiwitkowski311:qkaXQmxTwfyc5ol0@cluster0.ter8xk2.mongodb.net/';

// Połączenie z MongoDB
mongoose.connect(dbURI)
    .then(() => console.log('Połączono z MongoDB'))
    .catch(err => console.error('Błąd połączenia z MongoDB', err));

const app = express();
app.use(bodyParser.json());

// Schemat wizyty
const appointmentSchema = new mongoose.Schema({
    patientName: String,
    dob: Date,
    phone: String,
    purpose: String,
    appointmentDate: String,
    appointmentTime: String,
    doctor: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Trasa dodawania wizyty
app.post('/api/appointments', async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.json({ message: 'Wizyta została dodana pomyślnie' });
    } catch (error) {
        res.status(500).json({ error: 'Wystąpił błąd podczas dodawania wizyty' });
    }
});

// Trasa pobierania wizyt
app.get('/api/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Wystąpił błąd podczas pobierania wizyt' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serwer uruchomiony na porcie ${PORT}`);
});
