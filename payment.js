document.addEventListener('DOMContentLoaded', function () {
    const seatMapSection = document.getElementById('seatMap');

    // Create a simple seat map (you can dynamically generate this based on your backend data)
    const rows = 4;
    const columns = 4;

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= columns; col++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = `${row}${String.fromCharCode(64 + col)}`; // A, B, C, ...

            // Add click event listener for seat selection
            seat.addEventListener('click', function () {
                toggleSeatSelection(seat);
            });

            seatMapSection.appendChild(seat);
        }
    }

    // Function to toggle seat selection
    function toggleSeatSelection(seat) {
        seat.classList.toggle('selected');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const seatMapSection = document.getElementById('seatMap');
    const selectedSeatInput = document.getElementById('selectedSeat');
    const bookingForm = document.getElementById('bookingForm');

    // Create a simple seat map (you can dynamically generate this based on your backend data)
    const rows = 4;
    const columns = 4;
    const availableSeats = generateAvailableSeats(rows, columns);

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= columns; col++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = `${row}${String.fromCharCode(64 + col)}`; // A, B, C, ...

            // Add click event listener for seat selection
            seat.addEventListener('click', function () {
                if (!seat.classList.contains('unavailable')) {
                    toggleSeatSelection(seat);
                }
            });

            seatMapSection.appendChild(seat);
        }
    }

    // Function to toggle seat selection
    function toggleSeatSelection(seat) {
        seat.classList.toggle('selected');
        selectedSeatInput.value = seat.textContent;
    }

    // Function to generate available seats randomly (replace this with your backend logic)
    function generateAvailableSeats(rows, columns) {
        const availableSeats = [];

        for (let row = 1; row <= rows; row++) {
            for (let col = 1; col <= columns; col++) {
                const isAvailable = Math.random() > 0.5; // Randomly set availability
                const seatId = `${row}${String.fromCharCode(64 + col)}`;
                availableSeats.push({ id: seatId, available: isAvailable });
            }
        }

        return availableSeats;
    }

    // Form submission logic
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedSeat = selectedSeatInput.value;

        // Perform booking actions (you can send the selected seat to the backend)
        console.log(`Booking - Selected Seat: ${selectedSeat}`);
        // Add backend communication and booking logic here
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const selectedSeatInput = document.getElementById('selectedSeat');
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryDateInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');
    const submitPaymentButton = document.getElementById('submitPayment');
    const bookingForm = document.getElementById('bookingForm');

    // Function to toggle seat selection
    function toggleSeatSelection(seat) {
        seat.classList.toggle('selected');
        selectedSeatInput.value = seat.textContent;
    }

    // Function to simulate payment processing (replace with actual payment gateway integration)
    function processPayment() {
        // Simulated success
        const success = Math.random() > 0.5;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(success);
            }, 2000);
        });
    }

    // Form submission logic
    submitPaymentButton.addEventListener('click', async function () {
        const selectedSeat = selectedSeatInput.value;
        const cardNumber = cardNumberInput.value;
        const expiryDate = expiryDateInput.value;
        const cvv = cvvInput.value;

        if (!selectedSeat) {
            alert('Please select a seat before proceeding to payment.');
            return;
        }

        // Additional client-side validation for card details (replace with more robust validation)
        if (!cardNumber || !expiryDate || !cvv) {
            alert('Please provide valid card details.');
            return;
        }

        // Disable the payment button during processing
        submitPaymentButton.disabled = true;

        // Simulate payment processing
        const paymentSuccess = await processPayment();

        if (paymentSuccess) {
            alert(`Payment successful! Seat ${selectedSeat} booked.`);
            bookingForm.reset();
            // You can add additional logic here, like sending the booking details to the backend.
        } else {
            alert('Payment failed. Please try again.');
        }

        // Re-enable the payment button
        submitPaymentButton.disabled = false;
    });

    // ... (Other JavaScript logic)
});
