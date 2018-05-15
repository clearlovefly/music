var connection = require("./conn.js");

var CRUD = {
	insertData: function(sql, arr, callback) {
		connection.Client.query(sql, arr, function(error, result) {
			if (error) {
				console.log("插入数据发生错误");
				return;
			}
			console.log("插入成功");
			callback(result);
		})
	},
	selectData: function(sql, arr, callback) {
		connection.Client.query(sql, arr, function(error, result) {
			if (error) {
				console.log("查询数据失败");
				return;
			}
			console.log("查询成功");
			callback(result);
		})
	},
	updateData: function(sql, arr, callback) {
		connection.Client.query(sql, arr, function(error, result) {
			if (error) {
				console.log("修改数据失败");
				return;
			}
			console.log("修改成功");
			callback(result);
		})
	}
}

module.exports = CRUD;