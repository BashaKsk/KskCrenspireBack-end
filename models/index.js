const { Sequelize, DataTypes, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const sequelize = new Sequelize("sqlite::memory:");
const db = {};

//we do implement below code if there are n number of models

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     console.log("curent", basename);
//     db[model.name] = model;
//   });


//as there is one model i'm doing this

db.Users = require("./user.js")(sequelize, DataTypes);




db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

module.exports = db;
