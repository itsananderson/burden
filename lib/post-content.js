var fs = require('fs');

module.exports = function postContent(post) {
    var fd = fs.openSync(post, 'rs');
    var contents = fs.readFileSync(post, {encoding: 'utf8'});
    contents = contents.replace(/^-+\r?(\n[^-]+)+\n-+/, '');
    return contents.trim();
};