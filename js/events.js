
$(document).ready(function(){

  $("#sign_up_btn").click(function() {
      $('html, body').animate({
          scrollTop: $("#banner_signup").offset().top
      }, 1000);
  });


  $("#sign_in_btn").click(function() {
      $("#home_title").css({
        "opacity": "0"
      });

      $("#login").fadeIn(1000);
  });


  $("#signin_back").click(function() {
      $("#home_title").css({
        "opacity": "1"
      });

      $("#login").fadeOut(1000);
  });

  $('#banner_home').waypoint(function() {
    $("#sign_up_bloc").fadeIn(1000);
  });

});
