<?php
//定义通讯接口
interface ComInterface{
	//连接
	public function connect();
	//传输数据
	public function transfer();
	//断开连接
	public function disconnect();
}
