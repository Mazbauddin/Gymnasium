$(document).ready(function () {
        
    //slider active
    
$('.slider-active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
    dots: true,
    autoplay:true
});
    
    $('.venobox').venobox();
    
    //team active
    
    $('.team-acitve').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:false,
    dots: false,
    autoplay:true
});
    
    //testimonial-active
  $('.testimonial-active').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
    dots: true,
    autoplay:true
});
        //brand-active
  $('.brand-active').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
    autoplay:true,
    prevArrow: '<i class="fa fa-chevron-left"></i>',
    nextArrow: '<i class="fa fa-chevron-right"></i>'
});
    
    //counter
    
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
})


