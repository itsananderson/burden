var assert = require('assert');
var path = require('path');
var burden = require('../');

describe('Burden', function() {

    it('exists', function() {
        assert(burden);
    });

    it('converts', function(done) {
        burden().convert(path.join(__dirname + '/files/simple.md'), function(err, result) {
            assert.equal('<p>hello world</p>\n', result);
            done();
        });
    });
});