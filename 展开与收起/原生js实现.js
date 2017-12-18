var btn = document.getElementById("btn");
var textArea = document.getElementById("text");
var hide = document.getElementById("hide");
function showCon() {
    var textHeight = textArea.offsetHeight;
    var hideHeight = hide.offsetHeight;

    if (hideHeight - textHeight > 0) { //关键点
        if (hideHeight - textHeight > 0) {//关键点
            var h = 0;
            if (h < hideHeight - textHeight) {//关键点
                h += 38;
                textArea.style.height = textHeight + h + "px";
            }
            if (h >= hideHeight - textHeight) {
                btn.innerHTML = "Less";
                btn.href = "javascript:hideCon()";
            }
        } else {
            return//关键点，必不可少！！！
        }
    } else {
        return//关键点，必不可少！！！
    }


    setTimeout(showCon, 30);//关键点
}

function hideCon() {
    var textHeight = textArea.offsetHeight;
    var t = 0;

    if(textHeight > 150){//关键点
        t += 30;
        textArea.style.height = textHeight - t + "px";
    } else if (textHeight < 150){//关键点
        textArea.style.height = 150 + "px";
        btn.innerHTML = "More";
        btn.href = "javascript:showCon()";
    } else {
        return
    }
    setTimeout(hideCon, 30);//关键点

}

btn.onclick = showCon;