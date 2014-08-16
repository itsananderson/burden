var _ = require('lodash');

var convertFile = require('./lib/convert-file');
var convertString = require('./lib/convert-string');

function Burden(options) {
    this.options = _.defaults(this.defaultOptions, options);
}

Burden.prototype.defaultOptions = {

};

Burden.prototype.convertFile = convertFile;
Burden.prototype.convertString = convertString;

module.exports = function(options) {
    return new Burden(options);
};