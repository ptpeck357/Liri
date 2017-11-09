//FS package to read, write, rename files
var fs = require("fs");

//Importing keys for twitter to access twitter
var twitterKeys = require('./keys');

//Node package to make HTTP requests
var request = require("request");

//Node package to access twitter api 
var twitter = require('twitter');

console.log(twitterKeys);

//Spotify API information
var spotifyKeys = {
	Client_ID: '17aab725b284462aacfd997301bd07a1',
	Client_Secret: '5f242864dd51446bbb52a6689191de3e'
}