function create() {
    var pageWidth = document.body.scrollWidth;
    var pageHeight = document.body.scrollTop;
    //获取页面的高度和宽度

    var cHeight = document.documentElement.clientHeight;
    //获取页面的可视区域高度和宽度

    var mask = document.createElement("div");
    mask.id="mask";
    document.body.appendChild(mask);

    var login=document.createElement("div");
    login.id="sign";
    login.innerHTML="<div class=\"signIn\"><span id=\"closeBtn\">×</span>";
    document.body.appendChild(login);


    var oHeight=login.offsetHeight;
    var oWidth=login.offsetWidth;
    login.style.left=pageWidth/2-oWidth/2+"px";//登录界面的left等于  页面总宽度的一半-界面宽度的一半
    login.style.top=cHeight/2-oHeight/2+"px";//登录界面的top等于  页面可视高度的一半-界面高度的一半   （总高度一般都长出了可视范围）

    var close = document.getElementById("closeBtn");
    mask.onclick=close.onclick = function () {
        document.body.removeChild(login);
        document.body.removeChild(mask);
    }
}

window.onload=function(){
    var loginBtn=document.getElementById("loginBtn");
    //点击登录按钮
    loginBtn.onclick=function(){
        create();
        return false;
    }

};