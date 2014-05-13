"use strict";
var express = require('express');
var http = require('http');
var directory = require('serve-index');

module.exports = function(grunt) {
    grunt.registerTask('preview', 'Preview generated blog', function () {
        var options = this.options({
            "port": 4000
        });
        var app = express();
        app.set("port", options.port);
        app.use(express.static("./", {'index': ["index.html"]}));
        app.use(directory("./", {'icons': true, 'view': 'details'}));

        http.createServer(app).listen(app.get("port"), function() {
            console.log("Listening at http://localhost:" + app.get("port") + "/");
            grunt.task.run("watch");
        });
    });
};
