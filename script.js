document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Add click event listener to the back-to-top button
  backToTopButton.addEventListener("click", function (event) {
    // Prevent the default behavior of the link (scrolling to the anchor)
    event.preventDefault();

    // Scroll to the top of the document with smooth behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
