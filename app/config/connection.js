var Sequelize = require("sequelize");

var sequelize = new Sequelize("chirpy", "root", "root", {
  host: "localhost",
  port: 8889,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;