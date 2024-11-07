document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        // Display a success message
        document.getElementById('formResponse').innerText = 'Thank you for contacting us, ' + name + '. We will get back to you soon!';
        document.getElementById('contactForm').reset(); // Reset form
    } else {
        // Display an error message
        document.getElementById('formResponse').innerText = 'Please fill in all fields.';
    }
});

// Smooth scroll for CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});

