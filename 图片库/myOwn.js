


    function prepareGallery() {
        var gallery = document.getElementById("imgGallery");
        var links = gallery.getElementsByTagName("a");
        for(var i=0;i<links.length;i++){
            links[i].onclick = function () {
                return showPic(this);
            };
        }
    }


    function showPic(whichpic) {
        var source = whichpic.getAttribute("href");
        var text = whichpic.getAttribute("title");
        var big = document.getElementById("big");
        var picShow = document.getElementById("show");
        var showText = document.getElementById("des");
        des.firstChild.nodeValue=text;
        big.setAttribute("src",source);


        return false;//阻止浏览器的默认行为
    }
    prepareGallery();
