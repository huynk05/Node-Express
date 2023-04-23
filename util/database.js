const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "huynguyen", "12345678", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;