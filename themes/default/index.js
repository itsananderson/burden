"use strict";
var path = require('path');
var fs = require('fs');
var jade = require('jade');
var moment = require('moment');
var mkdirp = require('mkdirp');

function BurdenDefault(burden) {
    if (!this) return new BurdenDefault(burden);
    this.burden = burden;
    this.postDir = path.join(this.burden.options.root, 'public', 'blog');
    this.templateDir = path.join(__dirname, 'templates');
}

BurdenDefault.prototype.generate = function(blog, cb) {
    var self = this;
    var postFn = jade.compileFile(path.join(__dirname, 'templates', 'post.jade'), {pretty: true});
    var posts = self.burden.getPosts();
    var postsLeft = posts.length;
    posts.forEach(function(post) {
        var date = post.meta.date ? moment(new Date(post.meta.date)) : moment();
        mkdirp.sync(path.join(self.postDir, post.slug));
        var fd = fs.openSync(path.join(self.postDir, post.slug, 'index.html'), 'w');
        self.burden.convertString(post.contents, function(err, converted) {
            if (err) {
                return console.error(err);
            }

            fs.writeSync(fd, postFn({
                postBody: converted,
                blog: blog,
                post: {
                    title: post.meta.title,
                    body: converted,
                    date: date.toString(),
                    displayDate: date.format('MMM Do, YYYY'),
                    tags: [
                        {
                            url: '/blog/categories/gulp',
                            name: 'Gulp'
                        }
                    ],
                    meta: post.meta
                }
            }));
            fs.closeSync(fd);
            postsLeft -= 1;
            if (!postsLeft) {
                cb(null);
            }
        });
    });
};

module.exports = BurdenDefault;