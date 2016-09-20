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
   if($('nav').css('height','800px'))
   {
     $('nav li').click(function(){
       $('nav').css('margin','5px').css('height','50px').css('width','50px').css('overflow','hidden').css('background-image','url(../assets/figerprint.png)').css('background-size','contain').css('background-repeat','no-repeat');
     });
   };



});
