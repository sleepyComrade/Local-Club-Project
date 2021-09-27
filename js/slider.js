// slider

$(document).ready(function() {
  $('.slide').slick({
    dots: true,
    adaptiveHeight: true,
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    variableWidth: false
  });
});