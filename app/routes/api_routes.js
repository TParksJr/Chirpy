var Chirp = require("../models/chirp.js");

module.exports = function (app) {
    app.get("/api/all", function (req, res) {
        Chirp.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    app.post("/api/new", function (req, res) {
        Chirp.create({
            name: req.body.name,
            chirp: req.body.chirp,
            time: req.body.timeStamp
        }).then(function(results) {
            res.status(200).end();
        });
    });
};