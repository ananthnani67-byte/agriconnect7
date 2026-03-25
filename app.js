// App Interactions & Logic

document.addEventListener('DOMContentLoaded', () => {

    // --- Variables ---
    const navBookBtn = document.getElementById('nav-book-btn');
    const heroBookBtn = document.getElementById('hero-book-btn');
    const bookingModal = document.getElementById('booking-modal');
    const closeModal = document.getElementById('close-modal');
    const weatherAlert = document.getElementById('weather-alert');
    const closeWeather = document.getElementById('close-weather');
    const gpsBtn = document.getElementById('gps-btn');
    const locationInput = document.querySelector('.location-input input');
    const bookingForm = document.getElementById('booking-form');

    // --- Modal Logic ---
    const openModal = () => {
        bookingModal.classList.add('active');
    };

    const hideModal = () => {
        bookingModal.classList.remove('active');
    };

    navBookBtn.addEventListener('click', openModal);
    heroBookBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', hideModal);

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            hideModal();
        }
    });

    // --- Weather Alert Logic ---
    // Simulate real-time weather forecasting alert after 3 seconds
    setTimeout(() => {
        weatherAlert.classList.add('show');
    }, 3000);

    closeWeather.addEventListener('click', () => {
        weatherAlert.classList.remove('show');
    });

    // --- GPS Tracking Simulation ---
    gpsBtn.addEventListener('click', () => {
        locationInput.value = "Locating...";
        gpsBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i>';

        // Simulate GPS delay
        setTimeout(() => {
            locationInput.value = "Hyderabad, Telangana (Demo)";
            gpsBtn.innerHTML = '<i class="ri-check-line"></i>';
            gpsBtn.style.color = 'var(--primary)';
        }, 1500);
    });

    // --- Booking Form Submit ---
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const machineType = document.querySelector('input[name="machine"]:checked').value;
        const submitBtn = document.querySelector('.btn-submit');

        submitBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Processing...';

        // Simulate API call and confirmation
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="ri-check-double-line"></i> Booking Confirmed!';
            submitBtn.style.background = 'var(--primary-dark)';

            // Show alert representing SMS/App notification
            setTimeout(() => {
                alert(`SUCCESS! Your ${machineType} booking is confirmed.\n\nYou will receive a message with live GPS tracking details and the driver's contact number shortly.`);
                hideModal();

                // Reset form
                bookingForm.reset();
                submitBtn.innerHTML = 'Confirm Booking';
                submitBtn.style.background = '';
                gpsBtn.innerHTML = '<i class="ri-focus-3-line"></i>';
            }, 800);

        }, 1500);
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
