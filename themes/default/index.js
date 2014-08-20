"use strict";
var path = require('path');
var fs = require('fs');
var jade = require('jade');
var moment = require('moment');

function BurdenDefault(burden) {
    if (!this) return new BurdenDefault(burden);
    this.burden = burden;
    this.postDir = path.join(this.burden.options.root, 'public', 'blog');
    this.templateDir = path.join(__dirname, 'templates');
}

BurdenDefault.prototype.generate = function(blog, cb) {
    var self = this;
    var postFn = jade.compileFile(path.join(__dirname, 'templates', 'post.jade'), {pretty: true});
    self.burden.getPosts().forEach(function(post) {
        var date = moment(post.meta.date);
        var fd = fs.openSync(path.join(self.postDir, post.slug + '.html'), 'w');
        self.burden.convertString(post.contents, function(err, converted) {
            if (err) {
                return cb(err);
            }

            fs.writeSync(fd, postFn({
                postBody: converted,
                blog: blog,
                title: post.meta.title,
                postDate: date.toString(),
                postDateDisplay: date.format('MMM Do, YYYY'),
                tags: [
                    {
                        url: '/blog/categories/gulp',
                        name: 'Gulp'
                    }
                ]
            }));
            fs.closeSync(fd);
            cb(null, converted);
        });
    });
};

module.exports = BurdenDefault;