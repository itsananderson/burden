var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

var paths = require('./gulp-paths');

gulp.task('lint', function() {
    gulp.src(paths.sources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
    gulp.src(paths.tests)
        .pipe(mocha({reporter:'spec'}));
});

gulp.task('watch', function() {
    gulp.watch(paths.all, ['test']);
    gulp.watch(paths.all, ['lint']);
});

gulp.task('default', ['lint', 'test']);