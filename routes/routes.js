var router = require('express').Router();
var Helpers = require('../helpers');
var paths = Helpers.Constants.paths;
var path = require('path');

router.get('/viewlist', function (req, res) {
    // calling the util function
    Helpers.Util
        .diretoryTreeToObj(
        paths.viewList // Path to the file viewlist root directory
        )
        .then(function (results) {
            // if success
            res.json({
                success: true,
                children: results
            });
        })
        .catch(function (err) {
            // if failure
            res.status(500).json({
                success: false,
                error: err
            });
        });
});

module.exports = router;