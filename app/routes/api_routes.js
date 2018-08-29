var Chirp = require("../models/chirp.js");

module.exports = function (app) {
    app.get("/api/all", function (req, res) {
        Chirp.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    app.post("/api/new", function (req, res) {
        Chirp.create({
            author: req.body.author,
            body: req.body.body,
            created_at: req.body.created_at
        }).then(function(results) {
            res.status(200).end();
        });
    });
};