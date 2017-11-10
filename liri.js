//FS package to read, write, rename files
var fs = require("fs");

//Node package to make HTTP requests
var request = require("request");

var moment = require("moment")

//Node package to access twitter api 
var twitter = require("twitter");

//Importing keys for twitter to access twitter
var config = require('./keys');

var t = new twitter(config);

//The user's input 
var nodeArgs = process.argv;

//Taking out the word "node" and file name in argument string

var usersInput = "";

//Spotify API information
var spotifyKeys = {
	Client_ID: '17aab725b284462aacfd997301bd07a1',
	Client_Secret: '5f242864dd51446bbb52a6689191de3e'
};

//Getting the 2nd index of the argument
for (var i = 3; i < nodeArgs.length; i++) {

	if (i > 3 && i < nodeArgs.length) {

    	usersInput = usersInput + "+" + nodeArgs[i];

  	} else {	

		usersInput += nodeArgs[i];

	}

};


if(nodeArgs[2] === "my-tweets"){
	mytweets();
}

else if(nodeArgs[2] === "spotify-this-song"){
	spotify();
}

else if(nodeArgs[2] === "movie-this"){
	findMovie();
}

else if(nodeArgs[2] === "do-what-it-says"){
	dowhatitsays();
}

else(
	console.log("Command not found.")
);


//Twitter function
function mytweets(){

	var prams = {
		name: 'Peter Peck',
		screen_name: 'pt_peck357'
	};

	t.get('statuses/user_timeline', prams, function(error, tweets, response) {

		if(error) throw error;

		for (var i = 0; i < 20; i++) {

			console.log((i+1) + "." + " Tweet: " + tweets[i].text)

			console.log("Created at " + moment(tweets[i].created_at).format('MMMM Do, YYYY'));

			console.log("");			
		};

	});
};

function spotify(){

};

function findMovie(){

	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + usersInput + "&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {

		// If the request is successful
		if (!error && response.statusCode === 200) {

			//Console logging each piece of information about the movie line for line
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Release Date: " + JSON.parse(body).Year);
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating +"/10");
			console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[i].Value);
			console.log("Country Produced: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);

		}

	});

};

function dowhatitsays(){

};