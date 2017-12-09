<?php
//设置页面内容是html编码格式是utf-8
header("Content-Type:text/plain;charset=utf-8");
//header("Content-Type: application/json;charset=utf-8");
//header("Content-Type: text/xml;charset=utf-8");
//header("Content-Type: text/html;charset=utf-8");
//header("Content-Type: application/javascript;charset=utf-8");

//定义一个多维数组，包含员工的信息，每条员工信息为一个数组
$staff = array
    (
        array("name" => "Tom","number" => "101","sex" => "male","job" => "manager"),
        array("name" => "Jerry","number" => "102","sex" => "female","job" => "manager"),
        array("name" => "Tuffy","number" => "103","sex" => "male","job" => "manager"),
        array("name" => "Durant","number" => "104","sex" => "female","job" => "manager"),
        array("name" => "Curry","number" => "105","sex" => "male","job" => "manager"),
        array("name" => "Green","number" => "106","sex" => "female","job" => "manager"),
        array("name" => "James","number" => "107","sex" => "male","job" => "manager")
    );

//判断如果是get请求，则进行搜索；如果是POST请求，则进行新建
//$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
//$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	search();
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
	create();
}

//通过员工编号搜索员工
function search(){
	//检查是否有员工编号的参数
	//isset检测变量是否设置；empty判断值为否为空
	//超全局变量 $_GET 和 $_POST 用于收集表单数据
	if (!isset($_GET["number"]) || empty($_GET["number"])) {
		echo "Error :(";
		return;
	}
	//函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。
	//global 关键词用于访问函数内的全局变量
	global $staff;
	//获取number参数
	$number = $_GET["number"];
	$result = "Not Found :(";

	//遍历$staff多维数组，查找key值为number的员工是否存在，如果存在，则修改返回结果
	foreach ($staff as $value) {
		if ($value["number"] == $number) {
			$result = "Result：<br>Staff Number：" . $value["number"] . "<br>" . "Staff Name：" . $value["name"] . "<br>" .
			                  "Gender：" . $value["sex"] . "<br>" .  "Staff Job：" . $value["job"];
			break;
		}
	}
    echo $result;
}

//创建员工
function create(){
	//判断信息是否填写完全
	if (!isset($_POST["name"]) || empty($_POST["name"])
		|| !isset($_POST["number"]) || empty($_POST["number"])
		|| !isset($_POST["sex"]) || empty($_POST["sex"])
		|| !isset($_POST["job"]) || empty($_POST["job"])) {
		echo "Info Incomplete :( ";
		return;
	}
	//TODO: 获取POST表单数据并保存到数据库

	/*提示保存成功*/
	echo "Staff：" . $_POST["name"] . "<br>". " Save Done :)";
}

?>


