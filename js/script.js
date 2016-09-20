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
   if (window.matchMedia("(max-width: 460px)").matches){
      $(window).scroll(function(){
       var where = $(this).scrollTop();
       if(where < $(this).height()){
 -       $('.home').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
 -       $('.about').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.gallery').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.services').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.contact').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');


       }
       else if(where < $(this).height()*2){
 -       $('.about').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
 -       $('.home').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.gallery').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.services').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.contact').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');

       }
       else if(where < $(this).height()*3){
 -       $('.gallery').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
 -       $('.home').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.about').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.services').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.contact').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');

       }
       else if(where < $(this).height()*4){
 -       $('.services').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
 -       $('.home').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.gallery').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.about').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.contact').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');

       }
       else if(where < $(this).height()*5){
 -       $('.contact').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
 -       $('.home').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.gallery').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.services').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
 -       $('.about').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');

       }
     });
  }
  if (window.matchMedia("(min-width: 460px)").matches){
    $('nav li').css('border-bottom','none');
  }
  


});
