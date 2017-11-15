# Liri

## Description

LIRI is an acronym for Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data for specific command. There are four commands for this app, my-tweets, spotify-this-song, movie-this, do-what-it-says.

## Functionality

Entering the command first on the command line, each command does the following: 

1. my-tweets gives back your last 20 tweets from Twitter(currently, it gives back tweets from my personal Twitter account).

1. spotify-this-song plus the song you're looking for gives back the following:

 	* Artist(s)/Band
	* The title on the song
	* Preview link
	* Name of Album the song exists

1. movie-this plus the movie you're looking up gives you the following:
	* Title of the movie.
	* Year the movie came out.
	* IMDB Rating of the movie.
	* Rotten Tomatoes Rating of the movie.
	* Country where the movie was produced.
	* Language of the movie.
	* Plot of the movie.
	* Actors in the movie.

1. do-what-it-says reads the text in the random file and executes the given command and parameter within that file and gives back the data.

<h2>Technologies Used:</h2>

* JavaScript
* Node
* NPM(Node Packages Manager)
	* FS
	* request
	* Twitter
	* Node-spotify-api
	



