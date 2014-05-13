"use strict"

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['*'],
            tasks: ['generate']
        },
        generate: {
            files: {
                'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.loadTasks("./tasks");
};