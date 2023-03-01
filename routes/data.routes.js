const { getData } = require("../controllers/data.controller");

module.exports = function (app) {
    app.get("/get/data", getData);
    
  };