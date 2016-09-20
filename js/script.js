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
       $('.home').css('text-shadow','2px 2px 5px #EC008C');
       $('.about').css('text-shadow','none');
       $('.gallery').css('text-shadow','none');
       $('.services').css('text-shadow','none');
       $('.contact').css('text-shadow','none');
     }
     else if(where < $(this).height()*2){
       $('.about').css('text-shadow','2px 2px 5px #EC008C');
       $('.home').css('text-shadow','none');
       $('.gallery').css('text-shadow','none');
       $('.services').css('text-shadow','none');
       $('.contact').css('text-shadow','none');
     }
      else if(where < $(this).height()*3){
       $('.gallery').css('text-shadow','2px 2px 5px #EC008C');
       $('.home').css('text-shadow','none');
       $('.about').css('text-shadow','none');
       $('.services').css('text-shadow','none');
       $('.contact').css('text-shadow','none');
     }
     else if(where < $(this).height()*4){
       $('.services').css('text-shadow','2px 2px 5px #EC008C');
       $('.home').css('text-shadow','none');
       $('.gallery').css('text-shadow','none');
       $('.about').css('text-shadow','none');
       $('.contact').css('text-shadow','none');
     }
     else if(where < $(this).height()*5){
       $('.contact').css('text-shadow','2px 2px 5px #EC008C');
       $('.home').css('text-shadow','none');
       $('.gallery').css('text-shadow','none');
       $('.services').css('text-shadow','none');
       $('.about').css('text-shadow','none');
     }
   })
 



});
