
// Simple animation for elements when scrolling
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.project-card, .about-img, .about-text, .contact-info, .contact-form');

    const fadeInOptions = {
        threshold: 0.3
    };

    const fadeInObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Merci pour votre message ! Je vous répondrai très rapidement.');
        contactForm.reset();
    });
});