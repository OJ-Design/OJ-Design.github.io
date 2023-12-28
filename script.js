document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var viewportHeight = window.innerHeight;
    
    // Calculate opacity based on the scroll position and viewport height
    var opacity = Math.min(scrollPosition / viewportHeight, 1);

    // Set the opacity of the back-to-top button
    backToTopButton.style.opacity = opacity;

    // Toggle the button's visibility based on the calculated opacity
    backToTopButton.style.display = opacity > 0 ? "block" : "none";
  });

  // Add click event listener to the back-to-top button
  backToTopButton.addEventListener("click", function (event) {
    // Prevent the default behavior of the link (scrolling to the anchor)
    event.preventDefault();

    // Scroll to the top of the document with smooth behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
