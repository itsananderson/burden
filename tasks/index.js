module.exports = function(grunt) {

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
