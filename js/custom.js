$(function(){
    $('.back-top').click(function(){
       $('html,body').animate({scrollTop:0},1500); 
    });
});

$(window).scroll(function(){
    var scrolling=$(this).scrollTop();
    if(scrolling > 100){
        $('.back-top').fadeIn(500);
    }
    else{
        $('.back-top').fadeOut(500);
    }
});