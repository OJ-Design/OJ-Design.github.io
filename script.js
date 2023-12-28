document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");
  var indexSection = document.getElementById("index");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var indexSectionBottom = indexSection.offsetTop + indexSection.offsetHeight;

    if (scrollPosition > indexSectionBottom) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
});
