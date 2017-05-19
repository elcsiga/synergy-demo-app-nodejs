var config = require('../config');
var User = require('./userModel');
module.exports = function(app) {

    /**
     * @swagger
     * /api/synergy/health:
     *   get:
     *     tags: ["integration-synergy"]
     */
    app.get('/api/synergy/health', function (req, res) {
        res.send({
            status: 'UP'
        });
    });

    /**
     * @swagger
     * /api/synergy/info:
     *   get:
     *     tags: ["integration-synergy"]
     */
    app.get('/api/synergy/info', function (req, res) {
        res.send({
            displayName: 'NodeJS Demo App',
            address: config.url,
            iconUrl: config.url + '/icon.png',
            directlyAccessed: true,
            healthCheckUrl: config.url + '/api/synergy/health'
        });
    });
};