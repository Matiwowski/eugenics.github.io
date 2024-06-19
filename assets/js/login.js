// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const successMessage = document.getElementById('login-success-message');

    // Obiekt zdefiniowany z przykładowymi loginami i hasłami
    const users = [
        { username: 'admin', password: 'password123' },
        { username: 'user1', password: 'pass1234' },
        { username: 'john_doe', password: 'jd2023' },
        { username: 'jane_smith', password: 'js4567' },
        { username: 'bob_jones', password: 'bj7890' }
        // Można dodać więcej losowych użytkowników
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Zapobiegamy domyślnemu działaniu formularza

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Sprawdzamy czy istnieje użytkownik o podanych danych logowania
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Logowanie udane
            successMessage.style.display = 'block';

            // Przekierowanie do lokalnego pliku index.html
            setTimeout(() => {
                window.location.href = 'file:///C:/Users/Mati/desktop/Nowy%20folder%20(3)/index.html';
            }, 2000); // Czekamy 2 sekundy, aby użytkownik zobaczył komunikat
        } else {
            // Logowanie nieudane, można dodać obsługę błędów
            alert('Nieprawidłowa nazwa użytkownika lub hasło!');
        }
    });
});
