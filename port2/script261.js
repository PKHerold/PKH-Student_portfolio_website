// Log a welcome message to the console
console.log("Welcome to the Student Portfolio website!");

// Function to add smooth scrolling to all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to display a dynamic greeting message based on the time of day
/*function displayGreeting() {
    const greetingElement = document.createElement('div');
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    greetingElement.textContent = greetingMessage;
    greetingElement.className = 'greeting';
    document.body.prepend(greetingElement);
}

displayGreeting();*/

// Form validation function (if you add a contact form)
function validateForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let valid = true;

        if (name === "") {
            valid = false;
            alert("Name is required.");
        }

        if (email === "") {
            valid = false;
            alert("Email is required.");
        } else if (!validateEmail(email)) {
            valid = false;
            alert("Invalid email address.");
        }

        if (message === "") {
            valid = false;
            alert("Message is required.");
        }

        if (!valid) {
            event.preventDefault();
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Call the validateForm function if a contact form exists
if (document.getElementById('contactForm')) {
    validateForm();
}
