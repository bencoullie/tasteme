var container = document.getElementById('bio');

$(window).on("load", function(){
  $(".fade-in-cover").addClass("fadeOut").delay(600)
  .queue(function (next) {
    $(this).hide();
  });
  $(".card").delay(800)
  .queue(function (next) {
    $(this).addClass("fadeIn");
    next();
  });
  $(".card-content").delay(850)
  .queue(function (next) {
    $(this).addClass("fadeInUp");
    next();
  });

  Ps.initialize(container, {
    wheelSpeed: 1,
    minScrollbarLength: 5
  });
})
