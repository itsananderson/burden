var sources = ['index.js', 'lib/*.js', 'lib/**/*.js'];
var tests = ['test/*.js'];
var all = sources.concat(tests);

module.exports = {
    sources: sources,
    tests: tests,
    all: all
};