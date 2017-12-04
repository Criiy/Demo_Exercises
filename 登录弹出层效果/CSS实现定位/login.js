
//封装生成新元素函数
function create() {
    var maskArea = document.createElement("div");
    var loginArea = document.createElement("div");
    var close = document.createElement("span");
    maskArea.id = "mask";
    loginArea.id = "signIn";
    loginArea.innerHTML = "<span id=\"closeBtn\">×</span>";
    /*close.id = "closeBtn";
    close.innerHTML = "×";*/
    /*loginArea.appendChild(close);*/
    document.body.appendChild(maskArea);
    document.body.appendChild(loginArea);
    //在body中插入新建的节点



    var closeBtn = document.getElementById("closeBtn");
    var mask = document.getElementById("mask");


    //在登陆按钮触发之后，关闭按钮的事件
    closeBtn.onclick = function () {
        document.body.removeChild(loginArea);
        document.body.removeChild(maskArea);
    };


    //在登陆按钮触发之后，遮罩层的事件
    mask.onclick = function () {
        document.body.removeChild(loginArea);
        document.body.removeChild(maskArea);
    }
}


window.onload = function () {


    //登录按钮的点击事件，弹出层出现
    var loginBtn = document.getElementById("loginBtn");
    loginBtn.onclick = function () {
        create();
    };



};