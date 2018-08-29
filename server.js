var express = require("express");
var bodyparser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static("/app/public"));

require("app/routes/api_routes.js")(app);

app.listen(PORT, function () {
    console.log("Chirpy server listening on: http://localhost:" + PORT);
});