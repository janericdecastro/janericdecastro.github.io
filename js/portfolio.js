$(document).ready(function(){

  /* Scrolling animation */
  AOS.init({
    duration: 1200,
  });

  $("#get-involved").hover(function(){
    $("#get-involved").css("background-color", "black");
    $(this).find("a").css("color", "white");
  }, function() {
    $("#get-involved").css("background-color", "transparent");
    $(this).find("a").css("color", "black");
  });

});
