var https = require('https');

module.exports = {

    '@tags': ['test'],

    'Google': function(client) {
        client
            .url('http://localhost:7000')
            .refresh();
            .assert.title('hello')
            .end();
    },

    afterEach: function(client, done) {
        setTimeout(function() {
            done();
        }, 1000);
    }
};
