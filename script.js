// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Replace the current URL with one without a hash
    history.replaceState(null, null, window.location.pathname);

    // Scroll to the 'index' section
    document.getElementById('index').scrollIntoView();
});
