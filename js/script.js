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
     if (window.matchMedia("(min-width: 460px)").matches){
             if(where < $(this).height()*1.2){
       -       $('.home').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .services, .contact').css('text-shadow','none');
             }
             else if(where < $(this).height()*2.2){
       -       $('.about').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.home, .gallery, .services, .contact').css('text-shadow','none');
             }
             else if(where < $(this).height()*3.2){
       -       $('.gallery').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .home, .services, .contact').css('text-shadow','none');
             }
             else if(where < $(this).height()*4.2){
       -       $('.services').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .home, .contact').css('text-shadow','none');
             }
             else if(where < $(this).height()*5.2){
       -       $('.contact').css('text-shadow','2px 2px 5px #EC008C');
       -       $('.about, .gallery, .services, .home').css('text-shadow','none');
             }
      }
     else {
             if(where < $(this).height()*1.2){
       -       $('.home').css('border-bottom','3px solid rgba(255,0,100,1)');
       -       $('.about, .gallery, .services, .contact').css('border-bottom','3px solid rgba(255,255,255,0.5)');
             }
             else if(where < $(this).height()*2.2){
       -       $('.about').css('border-bottom','3px solid rgba(255,0,100,1)')
       -       $('.home, .gallery, .services, .contact').css('border-bottom','3px solid rgba(255,255,255,0.5)');
             }
             else if(where < $(this).height()*3.2){
       -       $('.gallery').css('border-bottom','3px solid rgba(255,0,100,1)');
       -       $('.about, .home, .services, .contact').css('border-bottom','3px solid rgba(255,255,255,0.5)');
      
             }
             else if(where < $(this).height()*4.2){
       -       $('.services').css('border-bottom','3px solid rgba(255,0,100,1)');
       -       $('.about, .gallery, .home, .contact').css('border-bottom','3px solid rgba(255,255,255,0.5)');
             }
             else if(where < $(this).height()*5.2){
       -       $('.contact').css('border-bottom','3px solid rgba(255,0,100,1)');
       -       $('.about, .gallery, .services, .home').css('border-bottom','3px solid rgba(255,255,255,0.5)');
             }
        }
     });
});
