document.addEventListener('DOMContentLoaded', function () {
    
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