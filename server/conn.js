var config = require("./config.js");

var ConnClient = {
	Client: require("mysql").createConnection(config)
}

module.exports = ConnClient;