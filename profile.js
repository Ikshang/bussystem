document.addEventListener('DOMContentLoaded', function () {
   function showProfile() {
        const dashboardContent = document.getElementById('dashboardContent');
        dashboardContent.innerHTML = `
            <h2>Profile</h2>
            <!-- Display user profile information here -->
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Address: [Address]</p>
            <!-- Add more profile details as needed -->
        `;
    }
});