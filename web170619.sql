/*
SQLyog Enterprise v12.09 (64 bit)
MySQL - 10.1.19-MariaDB 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `user` (
	`id` int (11),
	`username` varchar (60),
	`password` varchar (60)
); 
insert into `user` (`id`, `username`, `password`) values('29','张三','127');
insert into `user` (`id`, `username`, `password`) values('30','0李四','123');
insert into `user` (`id`, `username`, `password`) values('31','王五','123');
