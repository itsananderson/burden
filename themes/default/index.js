module.exports = function(burden) {
    this.burden = burden;
};

module.generate = function() {
    this.burden.getPosts().forEach(function(post) {
        console.log(post);
    });
};