var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Chirp = sequelize.define("chirp", {
    name: {
      type: Sequelize.STRING
    },
    chirp: {
      type: Sequelize.STRING
    },
    timeStamp: {
      type: Sequelize.DATE
    }
  }, {
    timestamps: false
});
  
Chirp.sync();
  
module.exports = Chirp;