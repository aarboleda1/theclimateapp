var url = 'http://ipinfo.io';
var request = require('request');

//use module exports to create function
//make requests to url to json
//if errror call callback with nothing
//callback()
//call the callback with the body
module.exports = function (callback) {
	
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if(error){
			callback()
		} else{
			callback(body)
		}

	});
	
};