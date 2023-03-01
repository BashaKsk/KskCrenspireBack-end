const { signin } = require("../controllers/user.controller");

module.exports = function (app) {
    app.post("/user/v1/signin", signin);
    
  };