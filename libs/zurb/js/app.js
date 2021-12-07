$(document).foundation()
jQuery(document).ready(function () {

    $("#slideshow > div:gt(0)").hide();
    
    setInterval(function() { 
      $('#slideshow > div:first')
      .fadeOut(0)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
    }, 4000);
});