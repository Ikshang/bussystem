document.addEventListener('DOMContentLoaded', function () {
    // Registration Form
    const registrationForm = document.getElementById('registrationForm');
        registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

    // Perform registration actions, e.g., send data to the backend
         const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log(`Registration - Username: ${username}, Password: ${password}`);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform registration actions
        registerUser(username, password);
    });

    function registerUser(username, password) {
        // TODO: Send registration data to the backend for processing
        console.log(`Registration - Username: ${username}, Password: ${password}`);
        // Add backend communication and user creation logic here
    }

});   
