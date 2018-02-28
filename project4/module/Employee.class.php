<?php
//员工类
class Employee{
	//成员变量
	private $_name = '';
	private $_age = '';
	//设置属性值
	public function __set($name,$value){
		$this->$name = $value;
	}
	//获取属性值
	public function __get($name){
		return isset($this->$name) ? $this->$name : NULL;
	}
	//访问不存在的方法时自动调用
	public function __call($name,$arguments){
		$message = '您访问的操作不存在';
		require './view/error.html';
	}
	//成员方法
	public function introduce(){
		$message = "大家好，我叫{$this->_name}，今年{$this->_age}岁！";
		require './view/introduce.html';
	}
	//员工添加
	public function add(){
		//接收变量并过滤
		$name = (isset($_POST['name']) && is_string($_POST['name'])) ? trim($_POST['name']) : '';
		$age = (isset($_POST['age']) && is_string($_POST['age'])) ? max((int)$_POST['age'],1) : 1;
		//如果员工姓名为空，则抛出异常
		if(empty($name)){
			throw new Exception('员工姓名不能为空，添加失败！');
		}
		//不为空，执行添加操作
		//……
		//添加完成，返回结果
		$message = '添加员工成功'; 
		require './view/result.html';
	}
}