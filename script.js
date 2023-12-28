// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the hash from the URL
    var currentHash = window.location.hash;

    // Check if the hash is not empty and corresponds to an existing section
    if (currentHash && document.querySelector(currentHash)) {
        // Scroll to the section specified in the hash
        document.querySelector(currentHash).scrollIntoView();
    } else {
        // If the hash is empty or doesn't correspond to an existing section, scroll to the 'index' section
        document.getElementById('index').scrollIntoView();
    }
});
