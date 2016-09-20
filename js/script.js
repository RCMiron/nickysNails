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
     if(where < $(this).height()){
       $('.home').css('border-bottom','3px solid rgba(255,0,100,1)');
     }
     else if(where < $(this).height()*2){
       $('.about').css('border-bottom','3px solid rgba(255,0,100,1)');
     }
      else if(where < $(this).height()*3){
       $('.gallery').css('border-bottom','3px solid rgba(255,0,100,1)');
     }
     else if(where < $(this).height()*4){
       $('.services').css('border-bottom','3px solid rgba(255,0,100,1)');
     }
     else if(where < $(this).height()*5){
       $('.contact').css('border-bottom','3px solid rgba(255,0,100,1)');
     }
   })
 



});
