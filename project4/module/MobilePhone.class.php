<?php
//实现通讯接口
class MobilePhone implements ComInterface{
	//连接
	public function connect(){
		$message = '连接开始...';
		$target = '?module=MobilePhone&action=transfer';
		require './view/transfer.html';
	}
	//传输数据
	public function transfer(){
		$total = 100;  //假设总进度为100%
		//接收进度
		$step = isset($_GET['step']) ? (int)$_GET['step'] : 0;
		//每次进度加20
		$step += 20; 
		//将进度限制在0~100之间
		$step = min(max($step,0),100);
		//提示传输进度
		$message = $step ? "传输进度：{$step}%" : '传输数据开始...';
		//将进度传递给下次跳转的脚本
		$target = ($step == 100) ? '?module=MobilePhone&action=disconnect' : "?module=MobilePhone&action=transfer&step=$step";
		require './view/transfer.html';
	}
	//断开连接
	public function disconnect(){
		$message = '断开连接...';
		$success = true;
		require './view/transfer.html';
	}
}
