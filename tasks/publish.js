"use strict";
module.exports = function(grunt) {
    grunt.registerTask('publish', 'Generate and push the site', ['generate', 'push']);
};