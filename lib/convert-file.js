var fs = require('fs'),
    convertString = require('./convert-string');

module.exports = function(filePath, cb) {
    fs.readFile(filePath, function(err, contents) {
        if (err) {
            return cb(err);
        }
        convertString(contents.toString('utf8'), cb);
    });
};