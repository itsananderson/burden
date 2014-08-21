var marked = require('marked');
var highlight = require('highlight.js');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    highlight: function(code, language) {
        return highlight.highlight(language, code, true).value;
    }
});

module.exports = function(contents, options, cb) {
    options = options || {};
    marked(contents, options, cb);
};
