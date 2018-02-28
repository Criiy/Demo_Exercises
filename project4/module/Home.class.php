<?php
class Home{
	public function index(){
		require './view/index.html';
	}
	//查看员工（张三）
	public function a1(){
		$emp = new Employee;
		$emp->_name = '张三';
		$emp->_age = 38;
		$emp->introduce();
	}
	//查看员工（李四）
	public function a2(){
		$emp = new Employee;
		$emp->_name = '李四';
		$emp->_age = 24;
		$emp->introduce();
	}
	//查看管理层员工（张三）
	public function a3(){
		$emp = new ManageEmployee;
		$emp->_name = '张三';
		$emp->introduce();
	}
	//查看普通员工（李四）
	public function a4(){
		$emp = new NormalEmployee;
		$emp->_name = '李四';
		$emp->introduce();
	}
	//添加员工信息
	public function add(){
		require './view/add.html';
	}
	//访问不存在的方法时自动调用
	public function __call($name,$arguments){
		$message = '您访问的操作不存在';
		require './view/error.html';
	}
}