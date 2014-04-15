module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['*'],
            tasks: ['generate']
        }
    });

    grunt.loadNpmTasks("grunt-beep");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadTasks("./tasks");

};