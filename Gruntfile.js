module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['*'],
            tasks: ['generate']
        }
    });

    grunt.loadNpmTasks("grunt-beep");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('generate', 'Generate blog from static files', function() {
        console.log('generating..');
    });

    grunt.registerTask('preview', 'Preview generated blog', function() {
        console.log('previewing...');
    });

    grunt.registerTask('push', 'Push generated site to the remote', function() {
        console.log('pushing...');
    });

    grunt.registerTask('publish', 'Generate and push the site', ['generate', 'push']);

    grunt.registerTask('fail', function() {
        console.log('failing...');
        return false;
    });
};