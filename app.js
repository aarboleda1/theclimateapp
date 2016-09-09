var weather = require('./weather.js');
//include using require. if you use it and want to run a file locally. use ./
var location = require('./location.js');

var argv = require('yargs')
	.option('location',{
		demand: false,
		alias: 'l',
		describe: 'location of the user',
		type: 'string' 
	})
	.help('help')
	.argv;
//how the user will specify their location

if(typeof argv.l === 'string'  && argv.l.length > 0){
	//if location is given
	
	weather(argv.l, function (currentWeather) {
		console.log(currentWeather)
	}) 

	
} else {
	

	console.log('no location given');
	location(function (location) {
		if (location){
			console.log(location)
		} else {
			console.log('we are unable to provide information about your location')
		}
	}) 

}





