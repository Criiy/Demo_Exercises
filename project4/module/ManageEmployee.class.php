<?php
//定义管理层员工类
class ManageEmployee extends Employee{
	public function introduce(){
		$message = "管理层员工：{$this->_name}，愿做企业的桥梁！";
		require './view/introduce.html';
	}
}