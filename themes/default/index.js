"use strict";
var path = require('path');
var fs = require('fs');

function BurdenDefault(burden) {
    if (!this) return new BurdenDefault(burden);
    this.burden = burden;
    this.postDir = path.join(this.burden.options.root, 'public', 'blog');
    this.templateDir = path.join(__dirname, 'templates');
}

BurdenDefault.prototype.generate = function(cb) {
    var self = this;
    self.burden.getPosts().forEach(function(post) {
        var fd = fs.openSync(path.join(self.postDir, post.slug + '.html'), 'w');
        self.burden.convertString(post.contents, function(err, converted) {
            if (err) {
                return cb(err);
            }
            fs.writeSync(fd, converted);
            fs.closeSync(fd);
            cb(null, converted);
        });
    });
};

module.exports = BurdenDefault;