const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/auth');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Aby obsługiwać pliki statyczne

// Trasy
app.use('/api/auth', authRoutes);

// Uruchom serwer
const port = 3000;
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
