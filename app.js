const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const db = require("./models");
const userConfig = require("./config/userConfig.js");
const bodyParser = require("body-parser");
const { authJwtToken } = require("./middlewares/auth");
const port = process.env.PORT;
const UserSecurity = require("./security/userSecurity");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});
db.sequelize
  .sync()
  .then((res) => {
    db.Users.create({
      username: userConfig.userData.fullName,
      password: UserSecurity.hashPwd(userConfig.userData.email),
    })
      .then(() => {
        console.log("userCreated Succesfully");
      })
      .catch(() => {
        console.log("Failed to create User");
      });
  })
  .catch((err) => console.log(err));

require("./routes/user.routes")(app);

app.use(authJwtToken);
//All the routes that we'll declare below wiil private
require("./routes/data.routes")(app);

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
