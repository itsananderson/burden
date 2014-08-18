var assert = require('assert');
var path = require('path');
var burden = require('../');

describe('Burden', function() {

    it('exists', function() {
        assert(burden);
    });

    it('converts', function(done) {
        burden().convertFile(path.join(__dirname + '/files/simple.md'), function(err, result) {
            assert.equal('<h1 id="hello-world">hello world</h1>\n', result);
            done();
        });
    });

    it('converts code', function(done) {
        burden().convertFile(path.join(__dirname + '/files/code.md'), function(err, result) {
            assert.equal('<pre><code class="lang-javascript"><span class="hljs-keyword">var</span> foo\n</code></pre>\n', result);
            done();
        });
    });

    it('lists posts', function() {
        assert.deepEqual([{slug: 'test', meta: {test1: 'foo', test2: 'bar'}}], burden().getPosts());
    });
});