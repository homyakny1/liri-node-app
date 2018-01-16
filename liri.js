// Create vars with all the information
require("dotenv").config();

var request = require("request");
var fs = require("fs");
var inquirer = require('inquirer');

var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var commandLine = process.argv[2];

function twitter() {

    var client = new Twitter(keys.twitter);

    var params = {
        screen_name: 'Boot Camp HW'
    };

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            tweets.forEach(function (element) {
                console.log(`================================================\n${element.text}\n================================================\n`);
            });
        }
    });
};

switch (commandLine) {
    case "tweets":
        twitter();
        break;
}