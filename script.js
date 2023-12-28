document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    var scrollDistance = window.scrollY;
    var viewportHeight = window.innerHeight;

    // Adjust the arrow visibility based on scroll distance and viewport height
    backToTopButton.style.display = scrollDistance < viewportHeight ? "block" : "none";

    // Adjust the arrow opacity based on the scroll distance from the top of the second viewport
    var opacity = Math.min(1, (scrollDistance - viewportHeight) / viewportHeight);
    backToTopButton.style.opacity = opacity.toFixed(2);
  });

  // Add click event listener to the back-to-top button
  backToTopButton.addEventListener("click", function (event) {
    // Prevent the default behavior of the link (scrolling to the anchor)
    event.preventDefault();

    // Scroll to the top of the document with smooth behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
