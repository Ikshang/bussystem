// script.js


document.addEventListener('DOMContentLoaded', function () {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

     // Perform login actions, e.g., send data to the backend
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        console.log(`Login - Username: ${loginUsername}, Password: ${loginPassword}`);
    });
});
    
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Perform login actions
        loginUser(loginUsername, loginPassword);
    });

    function loginUser(username, password) {
        // TODO: Send login data to the backend for authentication
        console.log(`Login - Username: ${username}, Password: ${password}`);
        
        // In a real-world scenario, you would use a secure authentication mechanism.
        // Here, let's assume a simple check with hardcoded credentials for illustration.
        const hardcodedUsername = 'testuser';
        const hardcodedPassword = 'testpassword';

        if (username === hardcodedUsername && password === hardcodedPassword) {
            // Authentication successful
            console.log('Authentication successful');
        } else {
            // Authentication failed
            console.log('Authentication failed');
        }
    }

});
