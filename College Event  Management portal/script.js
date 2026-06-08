// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    // Event Registration Form Handler
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationSubmit);
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Event Modal Handler
    setupEventModalHandler();
});

/**
 * Handle registration form submission
 */
function handleRegistrationSubmit(e) {
    e.preventDefault();

    // Get form element
    const form = e.target;

    // Validate form
    if (!form.checkValidity() === false) {
        e.stopPropagation();
    }

    // Validate event selection
    const checkboxes = document.querySelectorAll('input[name="events"]:checked');
    const eventError = document.getElementById('eventError');

    if (checkboxes.length === 0) {
        eventError.style.display = 'block';
        return false;
    } else {
        eventError.style.display = 'none';
    }

    // Collect form data
    const formData = new FormData(form);
    const studentName = formData.get('studentName');
    const email = formData.get('email');
    const rollNumber = formData.get('rollNumber');
    const branch = formData.get('branch');
    const mobileNumber = formData.get('mobileNumber');

    // Get selected events
    const selectedEvents = Array.from(checkboxes).map(cb => cb.value);

    // Show success message
    showRegistrationSuccess(email, selectedEvents);

    // Reset form
    form.reset();

    // Log registration data (in real app, this would be sent to server)
    console.log('Registration Data:', {
        studentName,
        rollNumber,
        branch,
        email,
        mobileNumber,
        events: selectedEvents
    });

    form.classList.add('was-validated');

    return false;
}

/**
 * Show registration success alert
 */
function showRegistrationSuccess(email, events) {
    const successAlert = document.getElementById('successAlert');
    const confirmEmail = document.getElementById('confirmEmail');
    const registeredEvents = document.getElementById('registeredEvents');

    if (successAlert) {
        // Set email
        confirmEmail.textContent = email;

        // Clear and populate events list
        registeredEvents.innerHTML = '';
        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = event;
            registeredEvents.appendChild(li);
        });

        // Show alert
        successAlert.classList.remove('d-none');

        // Auto-hide after 5 seconds
        setTimeout(() => {
            successAlert.classList.add('d-none');
        }, 5000);

        // Scroll to alert
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Handle contact form submission
 */
function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;

    // Validate form
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return false;
    }

    // Collect form data
    const formData = new FormData(form);
    const contactName = formData.get('contactName');
    const contactEmail = formData.get('contactEmail');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Log contact data
    console.log('Contact Form Data:', {
        name: contactName,
        email: contactEmail,
        subject: subject,
        message: message
    });

    // Show success message
    showContactSuccess();

    // Reset form
    form.reset();
    form.classList.remove('was-validated');

    return false;
}

/**
 * Show contact form success message
 */
function showContactSuccess() {
    const successDiv = document.getElementById('contactSuccess');
    if (successDiv) {
        successDiv.classList.remove('d-none');

        // Auto-hide after 5 seconds
        setTimeout(() => {
            successDiv.classList.add('d-none');
        }, 5000);

        // Scroll to message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Setup event modal handler for quick registration
 */
function setupEventModalHandler() {
    const registerButtons = document.querySelectorAll('[data-bs-target="#registerModal"]');

    registerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventName = this.getAttribute('data-event');
            const modalEventName = document.getElementById('modalEventName');
            if (modalEventName) {
                modalEventName.textContent = eventName;
            }
        });
    });
}

/**
 * Smooth scroll behavior for anchor links
 */
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

/**
 * Add fade-in animation to cards on scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .event-card, .gallery-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

/**
 * Navbar active state management
 */
window.addEventListener('load', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

/**
 * Handle number input validation
 */
document.addEventListener('DOMContentLoaded', function() {
    const mobileInput = document.getElementById('mobileNumber');
    if (mobileInput) {
        mobileInput.addEventListener('input', function(e) {
            // Remove non-numeric characters except +, -, and space
            this.value = this.value.replace(/[^\d+\-\s]/g, '');
        });
    }
});

/**
 * Carousel auto-rotation control
 */
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('eventCarousel');
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });
    }
});

/**
 * Table search functionality (if needed)
 */
function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const table = document.getElementById(tableId);

    if (!input || !table) return;

    input.addEventListener('keyup', function() {
        const filter = this.value.toUpperCase();
        const rows = table.getElementsByTagName('tr');

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.getElementsByTagName('td');
            let match = false;

            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toUpperCase().includes(filter)) {
                    match = true;
                    break;
                }
            }

            row.style.display = match ? '' : 'none';
        }
    });
}

/**
 * Print functionality for schedule
 */
window.addEventListener('beforeprint', function() {
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
});

window.addEventListener('afterprint', function() {
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');
    if (navbar) navbar.style.display = 'block';
    if (footer) footer.style.display = 'block';
});

/**
 * Add copy-to-clipboard functionality for email addresses
 */
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href.startsWith('mailto:')) {
        const email = e.target.href.replace('mailto:', '');
        
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show temporary feedback
            const originalText = e.target.textContent;
            e.target.textContent = 'Copied!';
            
            setTimeout(() => {
                e.target.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    }
});

/**
 * Accordion panel management
 */
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Optional: Add custom logic for accordion behavior
            console.log('Accordion item clicked:', this.textContent);
        });
    });
});

/**
 * Form field auto-fill helpers
 */
function prefillRegistrationForm(data) {
    if (data.studentName) {
        const nameInput = document.getElementById('studentName');
        if (nameInput) nameInput.value = data.studentName;
    }
    
    if (data.email) {
        const emailInput = document.getElementById('email');
        if (emailInput) emailInput.value = data.email;
    }
    
    if (data.mobileNumber) {
        const phoneInput = document.getElementById('mobileNumber');
        if (phoneInput) phoneInput.value = data.mobileNumber;
    }
}

/**
 * Utility function to show toast notifications
 */
function showToast(message, type = 'info') {
    const toastHTML = `
        <div class="toast align-items-center text-white bg-${type} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;

    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    toastContainer.innerHTML = toastHTML;

    document.body.appendChild(toastContainer);

    const toast = new bootstrap.Toast(toastContainer.querySelector('.toast'));
    toast.show();

    // Remove container after toast is hidden
    toastContainer.addEventListener('hidden.bs.toast', () => {
        toastContainer.remove();
    });
}

/**
 * Event listener for dynamic content
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips and popovers if used
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

/**
 * Log page statistics
 */
window.addEventListener('load', function() {
    console.log('College Event Management System loaded successfully');
    console.log('Page:', window.location.pathname);
    console.log('Time:', new Date().toLocaleString());
});
