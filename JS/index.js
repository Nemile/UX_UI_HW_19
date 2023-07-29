// script.js
$(document).ready(function() {
    // Add hover effect to buttons
    $(".card button").hover(
      function() {
        $(this).css("background-color", "green"); // Change background color on hover
      },
      function() {
        $(this).css("background-color", "orangered"); // Change back to original color when not hovered
      }
    );
  });
  