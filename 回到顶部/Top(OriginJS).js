window.onload = function () {
    var btn = document.getElementById("btn");
    var timer = null;




    //设置点击事件
    btn.onclick = function () {
       timer = setInterval(function () {//设置定时器，多久执行一次
           var winTop = document.body.scrollTop;//把距离顶端的高度赋值给一个变量
           //每次与顶端的高度减少的速度
           var speed = Math.floor(-winTop/4);
           //新的高度
           document.body.scrollTop =winTop+speed;
           //判读何时停止
           if(winTop<=0){
              clearInterval(timer);
           }
       },30)
    }
};
