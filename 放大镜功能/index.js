window.onload = function () {
  var demoDiv = document.getElementById("demo");
  var smallBox = document.getElementById("small");
  var floatLayer = document.getElementById("floatLayer");
  var bigBox = document.getElementById("big");
  var bigImg = bigBox.getElementsByTagName("img")[0];


smallBox.onmouseover = function () {
      floatLayer.style.display = "block";
      bigBox.style.display = "block";
  };

  smallBox.onmouseout = function () {
      floatLayer.style.display = "none";
      bigBox.style.display = "none";
  };

  smallBox.onmousemove = function (e) {
      //这里是鼠标移动对象
      var event = e;

      //left top 是当鼠标移动时保持浮动层跟随鼠标移动的偏移量
      var left = event.clientX - demoDiv.offsetLeft-floatLayer.offsetWidth/2;
      var top = event.clientY - demoDiv.offsetTop -floatLayer.offsetHeight/2;

      //left Top 的范围限定
      if(left < 0){
          left = 0;
      } else if (left > (smallBox.offsetWidth - floatLayer.offsetWidth)) {
          left = smallBox.offsetWidth - floatLayer.offsetWidth;
      }

      if(top < 0){
          top = 0;
      } else if (top > (smallBox.offsetHeight - floatLayer.offsetHeight)) {
          top = smallBox.offsetHeight - floatLayer.offsetHeight;
      }
      //left Top 的范围限定
      //改变浮动层位置
      floatLayer.style.left = left + "px";
      floatLayer.style.top = top + "px";



      //改变大图片的显示位置
      //大图片改变的位置与小图片的位置的比例相等
      var percentX = left/(smallBox.offsetWidth - floatLayer.offsetWidth);
      var percentY = top/(smallBox.offsetHeight - floatLayer.offsetHeight);


      //注意：小图的移动跟大图的移动纵向与横向方向均相反
      bigImg.style.left = -percentX*(bigImg.offsetWidth - bigBox.offsetWidth) + "px";
      bigImg.style.top = -percentY*(bigImg.offsetHeight - bigBox.offsetHeight) + "px";


  }




};