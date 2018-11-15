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
});
  
Chirp.sync({force: true}).then(function() {
  return Chirp.create({
    name: 'John Doe',
    chirp: 'This is a test Chirp',
    timeStamp: new Date()
  });
});
  
module.exports = Chirp;