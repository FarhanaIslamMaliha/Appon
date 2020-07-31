$('#banner-part').slick({
  dots: true,
  speed: 300,
  infinite:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
    
});
$('.slider').slick({
 
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true, 
});
$('.venobox').venobox(); 

$('.details').slick({
 
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  asNavFor:'.images',

});
$('.images').slick({
 
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  centerMode:true,
  centerPadding:0,
  asNavFor:'.details',
});













