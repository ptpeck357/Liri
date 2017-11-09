console.log("Command: my-tweets - Get your recent tweet posts from twitter");

console.log("Command: movie-this - Get basic information about a movie");

console.log("Command: spotify-this-song - Get the artist, song name, link preview, and what album it comes from");

console.log("Command: do-what-it-says - Get your recent tweet posts from twitter");

console.log("");

//FS package to read, write, rename files
var fs = require("fs");

//Node package to make HTTP requests
var request = require("request");

//Node package to access twitter api 
var twitter = require("twitter");

//Importing keys for twitter to access twitter
var config = require('./keys');

var APIClinet = require('omdb-api-client');

var omdb = new APIClinet();

var t = new twitter(config);

//The user's input in GitBash
var nodeArgs = process.argv;

//Taking out the word "node" and file name in argument string

var usersInput = "";

//Spotify API information
var spotifyKeys = {
	Client_ID: '17aab725b284462aacfd997301bd07a1',
	Client_Secret: '5f242864dd51446bbb52a6689191de3e'
};

//Getting the 2nd index of the argument
for (var i = 2; i < nodeArgs.length; i++) {

	if (i > 2 && i < nodeArgs.length) {

    	usersInput = usersInput + "+" + nodeArgs[i];

  	} else {	

		usersInput += nodeArgs[i];

	}

};


if(usersInput === "my-tweets"){
	mytweets();
}

else if(usersInput === "spotify-this-song"){
	spotify();
}

else if(usersInput === "movie-this"){
	findMovie();
}

else if(usersInput === "do-what-it-says"){
	dowhatitsays();
}

else(
	console.log("Command not found.")
);



function mytweets(){

	var prams = {
		name: 'Peter Peck',
		screen_name: 'pt_peck357'
	};

	t.get('statuses/user_timeline', prams, function(error, tweets) {

		if(error) throw error;

		for (var i = 0; i < 20; i++) {

			console.log((i+1) + "." + " Tweet: " + tweets[i].text)

			console.log("Created at " + tweets[i].created_at);

			console.log("");			
		};

	});
};

function spotify(){

};

function findMovie(){

	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + usersInput + "&apikey=40e9cece";

	console.log(queryUrl);

	request(queryUrl, function(error, response, body) {

		// If the request is successful
		if (!error && response.statusCode === 200) {

			console.log("Release Year: " + JSON.parse(body).Year);

		}

	});
};

function dowhatitsays(){

};