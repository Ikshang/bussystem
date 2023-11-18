document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fromLocation = document.getElementById('fromLocation').value;
        const toLocation = document.getElementById('toLocation').value;
        const travelDate = document.getElementById('travelDate').value;
        const travelTime = document.getElementById('travelTime').value;

        // Perform search actions
        searchBuses(fromLocation, toLocation, travelDate, travelTime);
    });

    function searchBuses(fromLocation, toLocation, travelDate, travelTime) {
        // TODO: Send search criteria to the backend and retrieve bus information
        console.log(`Search - From: ${fromLocation}, To: ${toLocation}, Date: ${travelDate}, Time: ${travelTime}`);
        // Add backend communication and bus search logic here

        // For demonstration purposes, let's assume we retrieve bus information from the backend
        const busInfo = [
            { id: 1, name: 'Express Bus', departure: 'Kathmandu', arrival: 'Pokhara', date: '2023-12-01', time: '10:00 AM' },
            { id: 2, name: 'Local Bus', departure: 'Pokhara', arrival: 'Biratnagar', date: '2023-12-01', time: '02:00 PM' }
            // Add more bus information as needed
        ];

        // Display the search results (you can update the UI according to your design)
        displaySearchResults(busInfo);
    }

    function displaySearchResults(busInfo) {
        const bookingSection = document.getElementById('bookingSection');
        bookingSection.innerHTML = ''; // Clear existing content

        if (busInfo.length > 0) {
            const resultsHeading = document.createElement('h3');
            resultsHeading.textContent = 'Search Results:';
            bookingSection.appendChild(resultsHeading);

            const resultsList = document.createElement('ul');
            busInfo.forEach(bus => {
                const listItem = document.createElement('li');
                listItem.textContent = `${bus.name} - Departure: ${bus.departure}, Arrival: ${bus.arrival}, Date: ${bus.date}, Time: ${bus.time}`;
                resultsList.appendChild(listItem);
            });

            bookingSection.appendChild(resultsList);
        } else {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No buses found for the selected criteria.';
            bookingSection.appendChild(noResultsMessage);
        }
    }

    // ... (Other JavaScript logic)
    document.addEventListener('DOMContentLoaded', function () {
        const bookingForm = document.getElementById('bookingForm');
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const numberOfTickets = document.getElementById('numberOfTickets').value;
            const seatPreference = document.getElementById('seatPreference').value;
            const passengerName = document.getElementById('passengerName').value;
            const passengerAge = document.getElementById('passengerAge').value;
    
            // Perform booking actions
            bookTicket(numberOfTickets, seatPreference, passengerName, passengerAge);
        });
    
        function bookTicket(numberOfTickets, seatPreference, passengerName, passengerAge) {
            // TODO: Send booking information to the backend for processing
            console.log(`Booking - Tickets: ${numberOfTickets}, Seat Preference: ${seatPreference}, Passenger Name: ${passengerName}, Passenger Age: ${passengerAge}`);
            // Add backend communication and booking logic here
        }
    
        // ... (Other JavaScript logic)
    });
    
});
