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

// set the static file to serve
app.use(express.static(path.join(__dirname,'views')));

// listen port to start server
app.listen(1500,function(){
    console.log("server is listening on 1500 ")
});

