//FS package to read, write, rename files
var fs = require("fs");

//Importing keys for twitter to access twitter
var twitterKeys = require('./keys');

//Node package to make HTTP requests
var request = require("request");

//Node package to access twitter api 
var twitter = require('twitter');

//The user's input in GitBash
var nodeArgs = process.argv;

//Taking out the word "node" and file name in argument string
nodeArgs.slice(2);

var usersInput = " ";

//Spotify API information
var spotifyKeys = {
	Client_ID: '17aab725b284462aacfd997301bd07a1',
	Client_Secret: '5f242864dd51446bbb52a6689191de3e'
}

for (var i = 0; i < nodeArgs.length; i++) {
	usersInput = usersInput + " " + nodeArgs[i];
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

else(console.log("Commands not found."))

function mytweets(){

}

function spotify(){

}

function findMovie(){

}