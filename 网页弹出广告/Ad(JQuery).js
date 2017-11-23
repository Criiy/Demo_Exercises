$(document).ready(function(){
    $("#close").click(function () {
        $("#bottomAd").addClass("hide");
    });

    $("#off").click(function () {
        $("#leftAd").addClass("hide");
    });

    $("#ad").animate({height:250},500);

    $("#up").click(function () {
        $("#ad").animate({height:0},500);
    })

    $("#shareBtn").click(function () {
        var adLeft = parseInt($("#share").css("left"));
        if(adLeft<0) {
            $("#share").animate({left: 0}, 500);
        }
        if(adLeft==0){
            $("#share").animate({left: -200}, 500);
        }
    });

});