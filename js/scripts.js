$(document).ready(function() {
  $("button#background-dark").click(function() {
    $("body").removeClass("light-background");
    $("body").addClass("dark-background");
  });

  $("button#background-light").click(function() {
    $("body").removeClass("dark-background");
    $("body").addClass("light-background");
  });
});
