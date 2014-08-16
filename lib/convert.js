var supermarked = require('supermarked'),
    fs = require('fs');

module.exports = function(filePath, cb) {
    fs.readFile(filePath, function(err, contents) {
        if (err) {
            return cb(err);
        }
        cb(null, supermarked(contents.toString('utf8')));
    });
};