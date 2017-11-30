//经典函数，用于事件加载
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

//定义导航栏切换高亮函数
function highlightPage() {
    var header = document.getElementsByTagName("header");
    var navs = header[0].getElementsByTagName("nav");
    var links = navs[0].getElementsByTagName("a");
    var currenturl = document.location.href;
    //获取当前的地址
    var last = 0;

    //遍历每个links，对应的就加上here类名
    for (var i = 0; i < links.length; i++) {
        var linkurl = links[i].getAttribute("href");
        if (currenturl.indexOf(linkurl) != -1) {
            last = i;
        }
    }
    links[last].className = "here";
}

addLoadEvent(highlightPage);