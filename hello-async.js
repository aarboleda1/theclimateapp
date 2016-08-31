//usually

//setTimeout//
// setTimeout(function(){
// 	console.log('1');
// }, 3000);
// //useful because you can do multiple things at the same time
// setTimeout(function(){
// 	console.log('3');
// }, 1000);

// console.log('wait 3 seconds')

console.log('challenge');

function printInTwoSeconds(message){

	return setTimeout(function(){
		console.log(message)
	},2000)

}

printInTwoSeconds('hello async')


// Update: OpenWeather.org Requires An API Key (Free)
// Section 5, Lecture 37
// In the next several videos, you'll be using http://openweathermap.org to fetch real weather data.

// They've changed their API requiring an API Key. Don't worry, it's free and easy to setup. Here are the instructions to follow during the next video to setup your API Key:

// Step 1: Get API Key

// You can get an API Key by registering for a free account on their signup page.

// Once you login to your new account, you should see an API section on the page. Copy the API Key into the clipboard.

// Step 2: Update URL

// Anytime you use the API, all you need to do is add this API Key to the url. Currently the URL will look like this:

// var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';

// After you add the API Key, it should look like like the following. Notice the appid query parameter was added. Will talk more about that soon!

// var url = 'http://api.openweathermap.org/data/2.5/weather?appid=PASTE_API_KEY_HERE&q=' + encodedLocation + '&units=imperial';

// It's a shame they made this change, but after following those two steps, everything will work as expected!

// - Andrew
4c66f4cc32360bddf1de118eaee0c7b8

// 'http://api.openweathermap.org/data/2.5/weather?appid=4c66f4cc32360bddf1de118eaee0c7b8&q=' + encodedLocation + '&units=imperial';
