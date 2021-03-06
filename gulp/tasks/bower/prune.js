module.exports = function(gulp, config, plugins, callback) {
    'use strict';

    var bower = require('bower');

    return function() {
        return bower.commands.prune()
            .on('log', function(data) {
                plugins.util.log('bower', plugins.util.colors.cyan(data.id), data.message);
            })
            .on('end', function() {
                callback();
            });
    }();
};