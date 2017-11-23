window.onload = function () {
    var close = document.getElementById("close");
    var off = document.getElementById("off");
    var ad = document.getElementById("ad");
    var bottomAd = document.getElementById("bottomAd");
    var leftAd = document.getElementById("leftAd");
    var up = document.getElementById("up");
    var shareBtn = document.getElementById("shareBtn");
    var share = document.getElementById("share");



    //定义广告向下滑动函数
    var h = 0;
    var step = 5;
    function adDown(){
        if(h<250){
            h+=step;
            ad.style.height = h +'px';
            ad.style.display = 'block';
            setTimeout(adDown,3);//循环执行，adDown无限调用自己
        }
    }

    //定义广告向上滑动函数
    function adUp() {
        if(h>0){
            h-=step;
            ad.style.height = h +'px';
            setTimeout(adUp,3);//循环执行，adUp无限调用自己
        }
    }


    setTimeout(adDown,500);


    //收起顶部广告按钮函数
    up.onclick = function () {
        if(h>0){
            h-=step;
            ad.style.height = h +'px';
            setTimeout(adUp,3);
        }
    };


    //收起右下广告
    close.onclick = function () {
      if(!bottomAd.className){
          bottomAd.className = "hide";
      }  else {
          bottomAd.className +=" hide";
      }
    };


    //收起左侧广告
    off.onclick = function () {
        if(!leftAd.className){
            leftAd.className = "hide";
        }  else {
           leftAd.className +=" hide";
        }
    };


    //分享按钮函数
    shareBtn.onclick = function () {
        var left = parseInt(share.style.left);
        if(left<0) {
            share.style.left = 0;
        } else {
            share.style.left = -200 + "px";
        }
    }

};