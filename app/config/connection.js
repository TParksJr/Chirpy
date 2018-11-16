var Sequelize = require("sequelize");

var sequelize = new Sequelize("xlm2x5upd3pn7qns", "czmf03hi03n63ibp", "iem3bgjqonw5c1n9", {
  host: "q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(function() {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;