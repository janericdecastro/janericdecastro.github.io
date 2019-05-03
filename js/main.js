$(document).ready(function(){

  /* Scrolling animation */
  AOS.init({
    duration: 1200,
  });

  /* MENU HOVERS */
  $(".nav-item").hover(function(){
    $(this).find("div").css("opacity", "1");
  }, function() {
    $(this).find("div").css("opacity", "0");
  });


  /* BUTTON HOVERS */

  //Yellow button hover
  $(".button-container").hover(function(){
    $(this).find("div").css("background-color", "#333333");
  }, function() {
    $(this).find("div").css("background-color", "#ffdf00");
  });

  //Arrow hover
  $(".button-container").hover(function(){
    $(this).find("img").css("filter", "invert(1) sepia(1)");
  }, function() {
    $(this).find("img").css("filter", "invert(0) sepia(0)");
  });

  $(".button-container-1").hover(function(){
    $(this).find("div").css("background-color", "#333333");
  }, function() {
    $(this).find("div").css("background-color", "#ffdf00");
  });

  //Arrow hover
  $(".button-container-1").hover(function(){
    $(this).find("img").css("filter", "invert(1) sepia(1)");
  }, function() {
    $(this).find("img").css("filter", "invert(0) sepia(0)");
  });

  $(".enter-arrow").hover(function(){
    $(this).css("background-color", "#333333");
  }, function() {
    $(this).css("background-color", "#ffdf00");
  });

  //Arrow hover
  $(".enter-arrow").hover(function(){
    $(this).find("img").css("filter", "invert(1) sepia(1)");
  }, function() {
    $(this).find("img").css("filter", "invert(0) sepia(0)");
  });

});
