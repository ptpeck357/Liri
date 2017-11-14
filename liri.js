//FS package to read, write, rename files
var fs = require("fs");

//Node package to make HTTP requests
var request = require("request");

//Node package to access moment 
var moment = require("moment");

//Node package to access twitter api 
var twitter = require("twitter");

//Node package to access Spotify api 
var spotifySearch = require('node-spotify-api');

var spotify = new spotifySearch({

	id: '17aab725b284462aacfd997301bd07a1',

	secret: '5f242864dd51446bbb52a6689191de3e'

});

//Importing keys for twitter to access twitter
var config = require('./keys');

var t = new twitter(config);

//The user's input 
var nodeArgs = process.argv;

var usersInput = "";

fs.appendFile("log.txt", nodeArgs[2] + ", ", function(err){

	if (err) {
		console.log(err)
		return;
	} 
});

//Getting the 3rd index of the argument
for (var i = 3; i < nodeArgs.length; i++) {

	if (i > 3 && i < nodeArgs.length) {
    	usersInput = usersInput + "+" + nodeArgs[i];
  	} else {	
		usersInput += nodeArgs[i];
	};

};


if(nodeArgs[2] === "my-tweets"){
	mytweets();
}

else if(nodeArgs[2] === "spotify-this-song"){
	validateSong(usersInput);
}

else if(nodeArgs[2] === "movie-this"){
	validateMovie(usersInput);
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
		screen_name: 'pt_peck357',
		count: 20
	};

	t.get('statuses/user_timeline', prams, function(error, tweets, response) {

		if(error) throw error;

		for (var i = 0; i < tweets.length; i++) {
			console.log((i+1) + "." + " Tweet: " + tweets[i].text);
			console.log("Created at " + moment(tweets[i].created_at).format('MMMM Do YYYY'));
			console.log("");	
		};

	});

};


function findSong(usersInput){

	spotify.search({ type: 'track', query: usersInput}, function(err, data) {

	  	if (err) {
	    	return console.log('Error occurred: ' + err);
	  	};

		console.log("Artist/Band: " + data.tracks.items[0].artists[0].name);
		console.log("Song Title: " + data.tracks.items[0].name);
		console.log("Link: " + data.tracks.items[0].external_urls.spotify);
		console.log("Album: " + data.tracks.items[0].album.name);

		});
};


//Tests whether or not the user inputed a value for song
function validateSong(usersInput){ 

	if(usersInput){
		
		findSong(usersInput)

	} else {

		//Default song if user input for song is blank
		usersInput = "The Sign Ace of Base";

		findSong(usersInput)
	};
};



function findMovie(usersInput){

	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + usersInput + "&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {

		// If the request is successful
		if (!error && response.statusCode === 200) {

			console.log("Title: " + JSON.parse(body).Title);
			console.log("Release Date: " + JSON.parse(body).Year);
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating + "/10");

			//checking if rotten tomatoes rating exists for this movie
			try {var rating = JSON.parse(body).Ratings[1].Value;} catch(err) {}
			if(rating){
				console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
			} else {
				console.log("Rotten Tomatoes Rating: N/A");
			}
			
			console.log("Country Produced: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		};

	});

};

//Tests whether or not the user inputed a value for movie
function validateMovie(){

	if(usersInput){

		findMovie(usersInput);

	} else {

		//Default song if user input for movie is blank
		usersInput = "Mr.Nobody";

		findMovie(usersInput)

	};
};



function dowhatitsays(){

	var command = "";
	var arg = "";

	fs.readFile("random.txt", "utf8", function(error, data) {

		if (error) {
			return console.log(error);
		};


	var dataArray = data.split(",");

			command = dataArray[0];

			if (dataArray[1]) {

				arg = dataArray[1];

				arg = arg.substring(1, arg.length - 1);

			}

			if (command === "spotify-this-song") {
				findSong(arg);
			}

			else if (command === "my-tweets") {
				mytweets();
			}
			
			else if(command === "movie-this"){
				findMovie(arg);
			}
	});

};

