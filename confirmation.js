document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 1;

    function showStep(step) {
        const steps = document.querySelectorAll('.checkout-step');
        steps.forEach((s) => (s.style.display = 'none'));
        document.getElementById(`step${step}`).style.display = 'block';
    }

    window.nextStep = function () {
        if (currentStep < 3) {
            currentStep++;
            showStep(currentStep);
        }
    };

    window.prevStep = function () {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    };

    window.placeOrder = function () {
        // Simulate placing the order (replace with actual order processing logic)
        const fullName = document.getElementById('fullName').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;

        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Generate a unique booking reference number (replace with your logic)
        const bookingReference = generateBookingReference();

        // Display confirmation details on the confirmation page
        const confirmationDetails = document.getElementById('confirmationDetails');
        confirmationDetails.innerHTML = `
            <p><strong>Thank you for your booking, ${fullName}!</strong></p>
            <p>Your order has been successfully placed.</p>
            <p><strong>Booking Reference:</strong> ${bookingReference}</p>
            <p><strong>Shipping Details:</strong></p>
            <p>Full Name: ${fullName}</p>
            <p>Address: ${address}</p>
            <p>City: ${city}</p>
            <p><strong>Payment Details:</strong></p>
            <p>Card Number: ${cardNumber}</p>
            <p>Expiry Date: ${expiryDate}</p>
            <p>CVV: ${cvv}</p>
        `;

        // Send a confirmation email (replace with actual email sending logic)
        sendConfirmationEmail(fullName, address, city, cardNumber, expiryDate, cvv, bookingReference);

        // Proceed to the confirmation page
        nextStep();
    };

    function sendConfirmationEmail(fullName, address, city, cardNumber, expiryDate, cvv, bookingReference) {
        const emailContent = `
            <p><strong>Thank you for your booking, ${fullName}!</strong></p>
            <p>Your order has been successfully placed.</p>
            <p><strong>Booking Reference:</strong> ${bookingReference}</p>
            <p><strong>Shipping Details:</strong></p>
            <p>Full Name: ${fullName}</p>
            <p>Address: ${address}</p>
            <p>City: ${city}</p>
            <p><strong>Payment Details:</strong></p>
            <p>Card Number: ${cardNumber}</p>
            <p>Expiry Date: ${expiryDate}</p>
            <p>CVV: ${cvv}</p>
        `;

        // Simulate sending an email (replace with actual email sending logic)
        console.log('Email sent with the following content:');
        console.log(emailContent);
    }

    function generateBookingReference() {
        // Simulate generating a unique booking reference number (replace with your logic)
        const timestamp = new Date().getTime();
        const randomDigits = Math.floor(Math.random() * 10000);
        return `BOOKING-${timestamp}-${randomDigits}`;
    }
});
