var router = require('express').Router();
var Helpers = require('../helpers');
var paths = Helpers.Constants.paths;
var path = require('path');

// get api for viewlist
router.get('/viewlist', function(req, res) {
    // calling the util function
    Helpers.Util
        .diretoryTreeToObj(
        paths.viewList // Path to the file viewlist root directory
        )
        .then(function(results) {
            // if success
            res.json({
                success: true,
                children: results
            });
        })
        .catch(function(err) {
            // if failure
            res.status(500).json({
                success: false,
                error: err
            });
        });
});

// get api for softwareslist
router.get('/softwareslist', function(req, res) {
    //calling the utill function
    Helpers.Util
        .diretoryTreeToObj(
        paths.softwaresList // Path to the file softwarelist root directory
        )
        .then(function(results) {
            //if success
            res.json({
                success: true,
                children: results
            });
        })
        .catch(function(err) {
            //if failure
            res.status(500).json({
                success: false,
                error: err
            });
        })

});

module.exports = router;