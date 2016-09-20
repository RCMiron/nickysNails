$(document).ready(function() {

  $('nav a').click(function(event) {
    $(this).css("text-decoration","none");
    $(this).css("color","white");
    event.preventDefault();
    var anchorTo = $(this);
    $('body, html').animate({
      scrollTop: $(anchorTo.attr('href')).offset().top
    }, 1000);
   });
   $(window).scroll(function(){
     var where = $(this).scrollTop();
     if(where < $(this).height()*0.7){
       $('nav li:first-child').css('border-bottom','3px solid rgba(255,0,100,1)');
     }
   })
 



});
