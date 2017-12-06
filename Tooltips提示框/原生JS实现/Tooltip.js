var className = 'tooltip-box';

//obj - ToolTip 超链接元素
//id - ToolTip提示框id
//html - ToolTip提示框HTML
//width - ToolTip提示框宽度（可选）
//height - ToolTip提示框高度（可选）

function showTooltip(obj, id, html, width, height) {
    if (document.getElementById(id) == null) {
        //如果不存在就创建
        var tooltipBox;
        tooltipBox = document.createElement('div');
        tooltipBox.className = className;
        tooltipBox.id = id;
        tooltipBox.innerHTML = html;

        obj.appendChild(tooltipBox);
        //在超链接后面添加


        //设置提示框的样式
        tooltipBox.style.width = width ? width + 'px' : 'auto';
        //提示框的宽度，有设置就等于设置值，没有就自动
        tooltipBox.style.height = height ? height + 'px' : 'auto';
        //提示框的高度，有设置就等于设置值，没有就自动
        tooltipBox.style.lineHeight = height + 'px';
        //用于文字居中

        //设置提示框的位置与显示
        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";

        var left = obj.offsetLeft;
        var top = obj.offsetTop + 25;//刚好在超链接的正下方


        //提示框位置的外围限定
        if (left + tooltipBox.offsetWidth > document.body.clientWidth) {
            var demoLeft = document.getElementById("demo").offsetLeft;
            left = document.body.clientWidth - tooltipBox.offsetWidth - demoLeft;
            if (left < 0) left = 0;
        }

        tooltipBox.style.left = left + 'px';
        tooltipBox.style.top = top + 'px';


        //同时设定鼠标离开事件
        obj.onmouseleave = function () {
            setTimeout(function () {
                document.getElementById(id).style.display = "none";
            }, 100);
            //延迟执行，便于用户体验
        };

    } else {
        //如果存在就显示
        document.getElementById(id).style.display = "block";
    }
}

var t1 = document.getElementById("tooltip1");
var t2 = document.getElementById("tooltip2");
var t3 = document.getElementById("tooltip3");

//添加鼠标进入事件
t1.onmouseenter = function () {
    showTooltip(this, "t1", 'I am here', 170,40);
};

t2.onmouseenter = function () {
    showTooltip(this, "t2", 'This way', 150,40);
};

t3.onmouseenter = function () {
    showTooltip(this, "t3", 'Ah ha', 130,40);
};