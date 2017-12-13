$(document).ready(function () {
    //当页面在滚动时
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        //获取页面滚动条到顶部的高度，注意是scrollTop()!!!不是scrollTop！！！
        var menu = $("#menu"); //获取导航栏
        var items = $("#content").find(".item"); //获取每个item
        //注意：在ID下find比直接$(".class")效率更高
        var currentId = "";//定义一个当前的id为空

        items.each(function () {//遍历每个item，做如下事情
            //var m = $(this);
            var itemTop = $(this).offset().top; //获取当前item到顶部的高度
            if(top > itemTop-300){
                currentId = "#" + $(this).attr("id");//获取到当前item的id，赋给currentId
            }else {
                return false;
            }
        });

        var currentLink = menu.find(".current");//找到当前的current类
        if(currentId && currentLink.attr("href") != currentId){//当当前的currentID为真(存在)且currentLink的href属性不等于currentID同时成立时
            currentLink.removeClass("current");
            menu.find("[href='"+currentId+"']").addClass("current");//找到含有当前id的href属性字段，加上current类
        }
    });
});