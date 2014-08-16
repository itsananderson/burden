var fs = require('fs'),
    convertString = require('./convert-string');

module.exports = function(filePath, options, cb) {
    options = options || {};
    fs.readFile(filePath, function(err, contents) {
        if (err) {
            return cb(err);
        }
        convertString(contents.toString('utf8'), options, cb);
    });
};