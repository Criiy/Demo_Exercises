window.onload = function () {
    var list = document.getElementById("list");
    var listLi = list.children;

    //删除节点函数
    function removeNode(node) {
        node.parentNode.removeChild(node);
        //不能删除自己，要从上一级删除
    }

    //点赞与取消函数
    function praiseBox(box, el) {
        var praiseElement = box.getElementsByClassName("praiseTotal")[0];
        var oldTotal = parseInt(praiseElement.getAttribute("total"));
        var txt = el.innerHTML;
        var newTotal;

        if(txt == "Good!"){//点赞
            newTotal = oldTotal + 1;
            praiseElement.innerHTML = (newTotal == 1) ? "I Liked." : "I and other " + newTotal + " people liked.";
            el.innerHTML = "Cancel";
        }
        else {//取消
            newTotal = oldTotal - 1;
            praiseElement.innerHTML = (newTotal == 0) ? "" : newTotal + " people liked.";
            el.innerHTML = "Good!"
        }
        praiseElement.style.display = (newTotal == 0) ? "none" : "block";
        //如果没人赞，隐藏
        praiseElement.setAttribute("total",newTotal);
        //更新total属性
    }


    //评论相关的函数
    function CandR(box) {
        var textarea = box.getElementsByTagName("textarea")[0];
        var comList = box.getElementsByClassName("commentList")[0];
        var newDiv = document.createElement("div");
        newDiv.className = "commentBox clearfix";
        newDiv.setAttribute("user","self");
        var divHtml = "<img class=\"myHead\" src=\"images/my.jpg\">\n" +
            "<div class=\"commentContent\">\n" +
            "<p class=\"commentText\">\n" +
            "<span class=\"user\">Me:</span>"+ textarea.value+"\n" +
            "</p>\n" +
            "<p class=\"commentTime\">\n" +
            updateDate(new Date()) +
            "<a class=\"commentPraise\" total=\"0\" my=\"0\" style=\"\">1 Like</a>\n" +
            "<a class=\"commentOperate\">Delete</a>\n" +
            "</p>";
        newDiv.innerHTML = divHtml;
        comList.appendChild(newDiv);
        textarea.value = "";
        textarea.onblur();

    }

    //更新日期函数
    function updateDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mi = date.getMinutes();
        m = m > 9 ? m : '0' + m;
        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
    }

    //评论中点赞函数
    function praiseReply(el) {
        var oldTotal = parseInt(el.getAttribute("total"));
        var my = parseInt(el.getAttribute("my"));
        var newTotal;
        if(my == 0){//当前我没赞，点击要赞
            newTotal = oldTotal + 1;
            el.setAttribute("total",newTotal);
            el.setAttribute("my",1);
            el.innerHTML = newTotal + " liked cancel";
        } else {//当前我赞了，点击取消赞
            newTotal = oldTotal - 1;
            el.setAttribute("total",newTotal);
            el.setAttribute("my",0);
            el.innerHTML = (newTotal == 0) ? "Good!" : newTotal + " liked";
        }
        el.style.display = (newTotal == 0) ? "none" : "inline-block";
    }

    //评论操作函数
    function replyOpeartion(el) {
        var commentBox = el.parentNode.parentNode.parentNode;
        var box = commentBox.parentNode.parentNode.parentNode;
        var textarea = box.getElementsByTagName("textarea")[0];
        var user = commentBox.getElementsByClassName("user")[0];
        var txt = el.innerHTML;
        if(txt == "Reply"){//点击回复按钮
            textarea.onfocus();
            textarea.value = "@" + user.innerHTML;
            textarea.onkeyup();//从新计算字数
        } else {//点击删除自己的按钮，注意不能删除别人的
            removeNode(commentBox);
        }
    }

    //事件代理,给每个都绑定事件
    for(var i = 0;i < listLi.length;i++){
        listLi[i].onclick = function (e) {
            e = e || window.event;//兼容ie
            var el = e.srcElement;
            switch (el.className){

                //当点击类名为close的东西时(删除整条)
                case "close":
                    console.log(e);
                    //返回值为：MouseEvent
                    console.log(el);
                    //返回值为：<a class="close">×</a>
                    console.log(el.parentNode);
                    removeNode(el.parentNode);
                    break;

                //当点击类名为prasise的东西时(普通点赞)
                case "praise":
                    praiseBox(el.parentNode.parentNode.parentNode,el);
                    break;

                //当点击类名为btn btn-off的东西时(当输入框没文字时点击回复按钮)
                case "btn btn-off":
                    break;

                //当点击类名为btn的东西时(点击回复按钮)
                case "btn":
                    CandR(el.parentNode.parentNode.parentNode);
                    break;

                case "commentPraise":
                    praiseReply(el);
                    break;
                case "commentOperate":
                    replyOpeartion(el);
                    break;

            }

        };

        //输入框聚焦事件
        var textarea = listLi[i].getElementsByTagName("textarea")[0];
        textarea.onfocus = function () {
            this.parentNode.className += " textBox-on";
            this.value = this.value=="Comment..." ? "" : this.value;
            var button = this.parentNode.getElementsByClassName("btn")[0];
            button.className += " btn-off";
        };

        //输入框失焦事件
        textarea.onblur = function () {
            if(this.value == ""){
                this.parentNode.className = "textBox";
                this.value = "Comment...";
            }
            else {
                this.parentNode.className = "textBox textBox-on";
            }
        };

        //输入框鼠标弹起事件
        textarea.onkeyup = function () {
            var txtLen = this.value.length;
            var p = this.parentNode;
            var btn = p.children[1];
            var num = p.children[2];
            if(txtLen == 0){
                btn.className += " btn-off";
            }
            else {
                btn.className = "btn";
            }
            num.innerHTML = txtLen + "/140";
        }


    }

};