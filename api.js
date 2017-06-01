$(document).scroll(function() {
  //Show element after user scrolls 800px
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.scrollPast').fadeIn();
  } else {
    $('.scrollPast').fadeOut();
  }

  // Show element after user scrolls past 
  // the top edge of its parent 
  $('h2').each(function() {
    var t = $(this).parent().offset().top;
    if (y > t) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
   
});