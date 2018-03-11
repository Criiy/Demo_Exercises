window.onload = function () {

    //获取元素
    var myInput = document.getElementById("arrInput");
    var myCheck = document.getElementById("check");
    var newContent = document.getElementById("newContent");



    //插入新元素函数
    function zhengXu(arr) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "你输入的数组是 " + arr + " 顺序为：正序";
        newContent.appendChild(newDiv);
    }
    function wuXu(arr) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "你输入的数组是 " + arr + " 尚未排序";
        newContent.appendChild(newDiv);
    }
    function niXu(arr) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "你输入的数组是 " + arr + " 顺序为：逆序";
        newContent.appendChild(newDiv);
    }


    //检查是否排序的函数
    function check(arr) {
        //采用一个算子检验，让数组每一项与后一项比较，后一项大的算子就加一
        var count = 0;
        for(i=0;i<arr.length-1;i++){
            if(arr[i] < arr[i+1]){
                count++;
            }
        }
        if (count === arr.length-1){
            //算子的结果为数组的长度减一，算子在每次的比较都加一，即为后一项都大于前一项，则为顺序
            zhengXu(arr);
        } else if(count > 0 && count < arr.length - 1){
            //算子的结果大于0小于数组长度减一，算子不是每次比较都加一，即存在前大于后的现象，则未排序
            wuXu(arr);
        } else {
            //其他情况为逆序
            niXu(arr);
        }
    }


    myCheck.onclick = function () {

        //获取输入框打的值，并转化为数组
        var arr = myInput.value.split(",");
        arr.forEach(function (item,index) {
            arr[index] = +item;
        });

        //调用检查函数
        check(arr);
        };
    
};