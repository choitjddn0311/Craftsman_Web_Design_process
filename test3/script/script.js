$(document).ready(function(){
    $(".main").hover(function(){
        $(this).children(".submenu").stop().slideDown();
    },function(){
        $(this).children(".submenu").stop().slideUp();
    });

    var i =4;
    setInterval(function(){
        i--;
        if(i==3) $(".slide img").css("display","block")
        $(".slide img").eq(i).fadeOut(500);
        if(i<=1) i = 4;
    },2000);
});