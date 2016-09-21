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
     $('nav li').css('transition','transform 0.3s');
     if (window.matchMedia("(min-width: 460px)").matches){
             $('nav li').css('border-bottom','none');
             if(where < $(this).height()*0.8){
       -       $('.home').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .services, .contact').css('text-shadow','none');
             }
             else if(where < $(this).height()*1.8){
       -       $('.about').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.home, .gallery, .services, .contact').css('text-shadow','none');
             }
             else if(where < $(this).height()*2.8){
       -       $('.gallery').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .home, .services, .contact').css('text-shadow','none');
             }
             else if(where < $(this).height()*3.8){
       -       $('.services').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .home, .contact').css('text-shadow','none');
             }
             else if(where < $(this).height()*4.8){
       -       $('.contact').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .services, .home').css('text-shadow','none');
             }
      }
     else {
             if(where < $(this).height()*0.8){
       -       $('.home').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .services, .contact').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
             }
             else if(where < $(this).height()*1.8){
       -       $('.about').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.home, .gallery, .services, .contact').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
             }
             else if(where < $(this).height()*2.8){
       -       $('.gallery').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .home, .services, .contact').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
      
             }
             else if(where < $(this).height()*3.8){
       -       $('.services').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .home, .contact').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
             }
             else if(where < $(this).height()*4.8){
       -       $('.contact').css('border-bottom','3px solid rgba(255,0,100,1)').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .services, .home').css('border-bottom','3px solid rgba(255,255,255,0.5)').css('text-shadow','none');
             }
        }
     });
});
