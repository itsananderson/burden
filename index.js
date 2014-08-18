var _ = require('lodash');

var convertFile = require('./lib/convert-file');
var convertString = require('./lib/convert-string');
var getPosts = require('./lib/get-posts');

function Burden(options) {
    this.options = _.defaults(this.defaultOptions, options);
    this.themes['default'] = require('./themes/default')(this);

    this.theme = this.options.theme ? this.themes[this.options.theme] : this.themes.default;
}

Burden.prototype.defaultOptions = {
    root: process.cwd(),
    theme: 'default'
};
Burden.prototype.themes = {};

Burden.prototype.convertFile = convertFile;
Burden.prototype.convertString = convertString;
Burden.prototype.getPosts = getPosts;

Burden.generate = function() {
    this.theme.generate();
};

module.exports = function(options) {
    return new Burden(options);
};