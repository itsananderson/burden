var _ = require('lodash');

var convert = require('./lib/convert');

function Burden(options) {
    this.options = _.defaults(this.defaultOptions, options);
}

Burden.prototype.defaultOptions = {

};

Burden.prototype.convert = convert;

module.exports = function(options) {
    return new Burden(options);
};