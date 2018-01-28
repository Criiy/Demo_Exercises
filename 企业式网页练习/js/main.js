requirejs.config({
    paths: {
        jquery: "jquery-3.2.1.min"
    }
});

requirejs(["jquery"],function ($) {
    $("#top").on("click",move);
    $(window).on("scroll",function () {
        checkPosition($(window).height());
    });

    checkPosition($(window).height());

    function move() {
        $("html,body").animate({
            scrollTop: 0
        },800);
    }

    function checkPosition(pos) {
        if($(window).scrollTop()>pos){
            $("#top").fadeIn();
        } else {
            $("#top").fadeOut();
        }
    }
});