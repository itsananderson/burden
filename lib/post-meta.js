var fs = require('fs');

var parseMeta = require('./parse-meta');

var metaRegex = /^-+(\n[^-][^\n]+)+\n-+/m;

module.exports = function postMeta(post) {
    var fd = fs.openSync(post, 'rs');
    var readString = '';
    var reading = true;
    while (reading) {
        var res = fs.readSync(fd, 1024, 0, 'utf8');
        readString += res[0];
        reading = res[1] && metaRegex.test(readString);
    }
    fs.closeSync(fd);
    return parseMeta(readString);
};