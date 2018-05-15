var express = require("express");
var router = express.Router();
var crud = require("./crud.js");
var url = require("url");


router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

// 注册接口
router.post("/adduser", function(req, res) {
	// 获取参数
	var username = req.body.username;
	var password = req.body.password;

	var sql = "insert into user values (null,?,?)";
	var arr = [username, password];
	crud.insertData(sql, arr, function(result) {
		if (result) {
			res.json(200, {
				"msg": "success"
			})
		} else {
			res.json(200, {
				"msg": "error"
			})
		}
	})
});


// 登录接口
router.post("/selectuser", function(req, res) {
	// 获取参数
	var username = req.body.username;
	var password = req.body.password;
	var sql = "select * from user where username=?";
	var arr = [username];
	crud.selectData(sql, arr, function(result) {
		if (result.length > 0) {
			res.json(200, result); // {username:"",password:""}
		} else {
			res.json(200, {
				"msg": "暂无注册"
			})
		}
	})
});

// 修改密码接口
router.post("/resetpassword", function(req, res) {
	// 获取参数
	var id = req.body.id;
	var password = req.body.password;
	var sql = "update user set `password`=? where id=?";
	var arr = [password, id];
	crud.updateData(sql, arr, function(result) {
		if (result) {
			res.json(200, {
				"msg": "success"
			})
		} else {
			res.json(200, {
				"msg": "error"
			})
		}
	})
})


module.exports = router;