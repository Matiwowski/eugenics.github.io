// routes/auth.js

const express = require('express');
const bcrypt = require('bcryptjs'); // Biblioteka do hashowania hasła
const User = require('../models/User');

const router = express.Router();

// Endpoint do logowania
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Sprawdź, czy istnieje użytkownik o podanej nazwie użytkownika
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Użytkownik nie istnieje" });
    }

    // Sprawdź, czy hasło jest poprawne
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Nieprawidłowe hasło" });
    }

    // Użytkownik pomyślnie zalogowany
    res.status(200).json({ message: "Zalogowano pomyślnie" });

  } catch (error) {
    console.error("Błąd logowania", error);
    res.status(500).json({ message: "Wystąpił błąd serwera" });
  }
});

module.exports = router;
