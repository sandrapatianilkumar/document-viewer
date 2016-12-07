/**
 * All the constants go here
 */
var path = require('path');

var basePath = path.join(__dirname, '../');
var publicContent = path.join(basePath, 'views');
var viewList = path.join(publicContent, 'resources/pdfs');
var softwaresList = path.join(publicContent, 'resources/softwareslist');

var paths = {
    publicContent: publicContent,
    viewList: viewList,
    softwaresList: softwaresList
};

var constants = {
    paths: paths
};

module.exports = constants;