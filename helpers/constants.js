/**
 * All the constants go here
 */
var path = require('path');

var basePath = path.join(__dirname, '../');
var publicContent = path.join(basePath, 'views');
var viewList = path.join(publicContent, 'resources/pdfs');

var paths = {
    publicContent: publicContent,
    viewList: viewList
};

var constants = {
    paths: paths
};

module.exports = constants;