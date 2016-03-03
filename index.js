require('babel-register')();
require('babel-polyfill');
var app = require('./src');

// Start server
if (!module.parent) {
    app.start();
}

// Expose app
exports = module.exports = app;
