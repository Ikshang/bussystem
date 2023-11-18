document.addEventListener('DOMContentLoaded', function () {
    // Initial content - Bookings
    showBookings();

    // Navigation event listeners
    document.querySelector('a[href="#bookings"]').addEventListener('click', showBookings);
    document.querySelector('a[href="#profile"]').addEventListener('click', showProfile);
    document.querySelector('a[href="#settings"]').addEventListener('click', showSettings);

    function showBookings() {
        const dashboardContent = document.getElementById('dashboardContent');
        dashboardContent.innerHTML = `
            <h2>Bookings</h2>
            <!-- Display user bookings here -->
            <ul>
                <li>Booking 1 - [Details]</li>
                <li>Booking 2 - [Details]</li>
                <!-- Add more bookings as needed -->
            </ul>
        `;
    }

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

    function showSettings() {
        const dashboardContent = document.getElementById('dashboardContent');
        dashboardContent.innerHTML = `
            <h2>Settings</h2>
            <!-- Display user settings and preferences here -->
            <form id="settingsForm">
                <label for="changePassword">Change Password:</label>
                <input type="password" id="changePassword" name="changePassword" placeholder="New Password">
                
                <button type="button" onclick="updatePassword()">Update Password</button>
            </form>
        `;
    }

    // Additional functions for updating data (e.g., password)
    window.updatePassword = function () {
        // Simulate updating the password (replace with actual update logic)
        const newPassword = document.getElementById('changePassword').value;
        console.log(`Password updated: ${newPassword}`);
        alert('Password updated successfully!');
    };
});
