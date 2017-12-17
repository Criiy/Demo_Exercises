var win = $(window);
var ad = $("#ad");
var nav = $("#nav");
var topBar = $("#top");
win.scroll(function () {
    var scrollTop = win.scrollTop();
    var winHeight = win.innerHeight();
    var sideHeight = ad.height();
    var topHeight = topBar.height();

    if (scrollTop > topHeight) {
        nav.css({
            "position": "fixed",
            "top": 0
        });
    } else {
        nav.css({
            "position": "static"
        });
    }
})

/*if(scrollTop+winHeight > sideHeight){
     ad.css({
         "position": "fixed",
          "bottom": 0,
         "right": 0
     });
 }else {
     ad.css({
         "position": "static",
         "bottom": ""
     });
 }
});*/