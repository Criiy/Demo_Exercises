<?php
//定义普通员工类
class NormalEmployee extends Employee{
	//重写父类introduce()方法
	public function introduce(){
		$message = "普通员工：{$this->_name}，愿做企业的基石！";
		require './view/introduce.html';
	}
}