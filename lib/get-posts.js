var path = require('path');
var fs = require('fs');

var postMeta = require('./post-meta');
var postContent = require('./post-content');

var mdRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}-([^.]+)\.(md|markdown)$/;

module.exports = function getPosts() {
    var dir = path.join(this.options.root, 'source/_posts');
    var files = fs.readdirSync(dir);
    return files.map(function(file) {
        var match = file.match(mdRegex);
        if (!match) {
            return false;
        } else {
            var postPath = path.join(dir, file);
            return {
                slug: match[1],
                fileName: file,
                filePath: postPath,
                contents: postContent(postPath),
                meta: postMeta(postPath)
            };
        }
    }).filter(function(match) {
        return match;
    });
};