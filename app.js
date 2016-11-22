/**
 * express to provide server and routing
 * ref:  http://expressjs.com/en/4x/api.html
 */
var express = require('express');

/**
 * path provides utilities for working with file and directory paths.
 * ref:  https://nodejs.org/api/path.html
 */
var path = require('path');

//create express app
var app = express();

//port number 
var port = 1500;

// set the static file to serve
/**
 * __dirname : name of the directory that the currently executing script resides 
 * ref: https://nodejs.org/docs/latest/api/globals.html#globals_dirname
 */
app.use(express.static(path.join(__dirname,'views')));

// listen port to start server
app.listen(port,function(){
    console.log("server is listening on 1500 ");
});

