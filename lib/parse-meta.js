module.exports = function parseMeta(meta) {
    meta = meta.replace(/^-+\r?\n/, '');
    meta = meta.replace(/\r?\n-+(\r|\n|.)*/m, '');
    var parts = meta.split(/\r?\n/);
    var metaObject = {};
    parts.forEach(function(part) {
        part = part.trim();
        var match = part.match(/([^\:]+)\s*\:\s*(.*)/);
        if (match) {
            metaObject[match[1]] = match[2];
        }
    });
    return metaObject;
};