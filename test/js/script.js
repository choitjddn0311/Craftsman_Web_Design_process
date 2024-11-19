$(document).ready(function() {

    $(".main").hover(function(){
        $(".sub").slideDown();
    },function(){
        $(".sub").slideUp();
    })

    var i = 4;

    setInterval(function(){
        i--;
        if(i==3) $(".b img").css("right","0"); // 여기서 방향 조정함 top left right bottom 등등...
        $(".b img").eq(i).animate({"right":"1200px"},500);
        if(i <= 1) i=4;
    },2000);
});