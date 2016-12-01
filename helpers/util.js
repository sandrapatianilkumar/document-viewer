var fs = require('fs');
var Q = require('q');
var path = require('path');
var paths = require('./constants').paths;

/**
 * A function to get all files in a directory
 */
var diretoryTreeToObj = function (dir) {
    var results = [];
    var deferred = Q.defer();

    fs.readdir(dir, function (err, list) {
        if (err)
            return deferred.reject(err);

        var pending = list.length;

        if (!pending)
            return deferred.resolve({ name: path.basename(dir), type: 'folder', children: results });

        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    diretoryTreeToObj(file)
                        .then(function (res) {
                            results.push({
                                name: path.basename(file),
                                type: 'folder',
                                children: res
                            });
                            if (!--pending)
                                deferred.resolve(results);
                        });
                }
                else {
                    results.push({
                        type: 'file',
                        leaf: true,
                        name: path.basename(file),
                        path: path.relative(paths.publicContent, file)
                    });
                    if (!--pending)
                        deferred.resolve(results);
                }
            });
        });
    });

    return deferred.promise;
};

/**
 * A function to require all the files in a directory.
 * Returns an object with the required modules.
 * The modules can be accessed by file name with the first letter being capital like:
 *      fileName => constants.js
 *      accessing => obj.Constants
 */
var requireAllInDir = function (dir) {
    var regEx = /(.*).js/;
    var file;
    var fileName;
    var propertyName;
    var files = fs.readdirSync(dir);

    // this object will contain all the modules defined in this helpers directory
    var index = {};

    // extracting all the files and requiring them
    // adding all the required modules to the index object 
    for (var i in files) {
        file = files[i];

        // extract the name of the file without file extension
        fileName = file.match(regEx)[1];

        // excluding index.js
        if (fileName !== 'index') {
            // Capitalise first letter of the name
            propertyName = fileName.charAt(0).toUpperCase() + fileName.substr(1);

            // require and attach to the index object 
            index[propertyName] = require('./' + fileName);
        }
    }

    return index
};

// Exporting an object with the defined util functions
module.exports = {
    diretoryTreeToObj: diretoryTreeToObj,
    requireAllInDir: requireAllInDir
};