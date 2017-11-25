$(document).ready(function () {
    $(window).scroll(function () {
        var topHeight = $(window).scrollTop();
        if(topHeight>200){
            /*$("#btn").css("display","block");*/
            $("#btn").fadeIn();
        }else {
            /*$("#btn").css("display","none");*/
            $("#btn").fadeOut();
        }
    });

    $("#btn").click(function () {
        $('body,html').animate({scrollTop:0},500);
    });
});
