var request = require('request');
//var url = "http://api.openweathermap.org/data/2.5/weather?appid=4c66f4cc32360bddf1de118eaee0c7b8&q=La%20Quinta&units=imperial%27"


module.exports = function (location, callback) {
	var encodedLocation = encodeURIComponent(location); //concatenation of the location in the url
	var url = "http://api.openweathermap.org/data/2.5/weather?appid=4c66f4cc32360bddf1de118eaee0c7b8&q=" + encodedLocation + "&units=imperial%27"
	
	if(!location){
		return callback('no location provided')
	}

	request({
		url: url, 
		json: true
	}, function (error, response, body) {
		if (error){
			callback('unable to fetch weather.');
		} else {
			//console.log(JSON.stringify(body, null, 4));
			//console.log(body)
			console.log("It\'s " + Math.round((body.main.temp * 9/5 - 459.67)) + " degrees in "  + body.name +
				". The humidity is " + body.main.humidity + "%" + " and the current windspeed is " + body.wind.speed + "mph"
			 )
		}
	});

		
}



// weather(function (currentWeather) {
// 	console.log(currentWeather)
// });

// location(function (location) {
// 	if(!location){
// 		console.log('unable to guess location');
// 		return;
// 	}
// 	console.log('city: ' + location.city);
// 	console.log('long/lat: ' + location.loc)
// });



//set module exports to whatever you want to export
//module.exports built into node.js can be set to anything


//key = 4c66f4cc32360bddf1de118eaee0c7b8

// request({
// 	url: url, 
// 	json: true
// }, function (error, response, body) {
// 	if (error){
// 		console.log('unable to fetch weather.');
// 	} else {
// 		//console.log(JSON.stringify(body, null, 4));
// 		console.log("It\'s' " + body.main.temp + " degrees in "  + body.name )
// 		//
// 	}
// });



//so that json format is going to be true