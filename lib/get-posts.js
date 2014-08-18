var path = require('path');
var fs = require('fs');

var postMeta = require('./post-meta');

var mdRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}-([^.]+)\.(md|markdown)$/;

module.exports = function getPosts() {
    var dir = path.join(this.options.root, 'source/_posts');
    var files = fs.readdirSync(dir);
    return files.map(function(file) {
        var match = file.match(mdRegex);
        if (!match) {
            return false;
        } else {

            return {
                slug: match[1],
                meta: postMeta(path.join(dir, file))
            }
        }
    }).filter(function(match) {
        return match;
    });
};