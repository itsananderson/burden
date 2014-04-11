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
        if(Math.random() > 0.5) {
            grunt.log.write('\x07').write('♪');
        }
    });

    grunt.registerTask('fail', function() {
        console.log('failing');
        return false;
    });
};