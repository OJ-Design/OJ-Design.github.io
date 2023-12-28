// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Replace the current URL with one without a hash
    history.replaceState(null, null, window.location.pathname);

    // Scroll to the 'index' section
    document.getElementById('index').scrollIntoView();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
