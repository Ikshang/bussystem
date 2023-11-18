document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const searchForm = document.getElementById('searchForm');

    // Add event listener for form submission
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the selected district value
        const selectedDistrict = document.getElementById('district').value;

        // Perform actions like sending a request to the backend with the selected district
        // You can use AJAX or other methods to interact with the backend here
        console.log(`Selected District: ${selectedDistrict}`);

        // Update the UI or redirect based on the backend response
    });
});
