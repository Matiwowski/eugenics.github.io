// routes/appointmentRoutes.js

const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Endpoint do zapisywania nowej wizyty
router.post('/appointments', async (req, res) => {
    const { patientName, dob, phone, purpose, appointmentDate, appointmentTime, doctor } = req.body;

    try {
        const newAppointment = new Appointment({
            patientName,
            dob,
            phone,
            purpose,
            appointmentDate,
            appointmentTime,
            doctor,
        });

        await newAppointment.save();
        res.status(201).json({ message: 'Wizyta została dodana do bazy danych' });
    } catch (error) {
        console.error('Błąd zapisywania wizyty:', error);
        res.status(500).json({ message: 'Wystąpił błąd podczas zapisywania wizyty', error });
    }
});

// Endpoint do pobierania wszystkich wizyt (opcjonalnie, do debugowania)
router.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        console.error('Błąd pobierania wizyt:', error);
        res.status(500).json({ message: 'Wystąpił błąd podczas pobierania wizyt', error });
    }
});

module.exports = router;
