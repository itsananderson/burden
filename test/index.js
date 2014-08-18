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
        var expectedFile = '0000-00-00-test.md';
        assert.deepEqual({
            slug: 'test',
            fileName: expectedFile,
            filePath: path.join(process.cwd(), 'source', '_posts', expectedFile),
            contents: 'this is more',
            meta: {
                test1: 'foo',
                test2: 'bar'
            }}, burden().getPosts()[0]);
    });

    it('generates', function(done) {
        burden().generate(done);
    });
});