//IE不兼容？？？！！！！！！！！？？？？？！！！！！！？？！！！？？！？！？！？！？！？！！？！？！？！？
window.onload = function () {
    var box = document.getElementById("container");
    //获取容器ID
    var imgs = box.getElementsByTagName("img");
    //获取图片标签
    var imgWidth = imgs[0].offsetWidth;
    //获取第一张图片的宽度，默认图片宽度都一样
    var eWidth = 160;
    //自定义漏出宽度
    var boxWidth = imgWidth+(imgs.length-1)*eWidth;
    //计算容器宽度：第一张图片+n-1个漏出宽度
    box.style.width = boxWidth+'px';
    //通过dom操作修改box容器宽度
    function setImgs() {
        for (var i = 1, len = imgs.length; i < len; i++) {
            //从第二张图片开始往后堆叠
            imgs[i].style.left = imgWidth + eWidth * (i - 1) + 'px';
            //通多DOM修改每张图片里左边的位置：图片长度+i个漏出长度
        }
    }
    //原来图片还堆叠在一起，要设置图片按规定排列
    setImgs();

    var translate = imgWidth-eWidth;
    //设置要移动出的宽度：图片宽度-自定漏出宽度
    for(var i=0,len=imgs.length;i<len;i++){
        //每张图片都要修改
        (function (i) {
            imgs[i].onmouseover = function () {
                //鼠标指着第j张图片时
              setImgs();
              for(var j=1;j<=i;j++){
                  //鼠标指着的下j张图片
                  imgs[j].style.left=parseInt(imgs[j].style.left,10)-translate+'px';
                  //后面的图片均往回移动移动宽度
              }
            };
        })(i);

    }
};