const bcrypt = require("bcryptjs");
const db = require("../models");
const JWT = require("../security/jwtToken");
const responseObject = require("../utils/resObject");

const UserSecurity = require("../security/userSecurity");

exports.signin = async (req, res) => {
  const { username, password } = req.body;
  db.Users.findOne(
    {
      where: {
        username: username,
      },
    },
    { raw: true }
  )
    .then(async (data) => {
      const isValidPassword = await UserSecurity.comparePwd(
        password,
        data.password
      ).catch((err) => {
        return res
          .status(400)
          .json(
            responseObject(400, "Incorrect Password", null, "Client Error")
          );
      });
      if (isValidPassword) {
        const user = { id: data.id, username: data.username };
        const token = await JWT.getJwtToken(user);
        res.status(200).json({ message: "Login Success", data, token });
      } else {
        res
          .status(400)
          .json(
            responseObject(400, "Incorrect Password", null, "Client Error")
          );
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json(responseObject(400, "No User Found", null, err.message));
    });
};
