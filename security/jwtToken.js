const jwt = require("jsonwebtoken");
const userConfig = require('../config/userConfig.js')
class JWT {
  static async getJwtToken(user) {
    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: "24h",
      subject: user.id.toString(),
    });

    return token;
  }

  static async verifyJwtToken(inputToken) {
    return jwt.verify(inputToken, process.env.JWT_KEY, (err) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
  }
}

module.exports = JWT;
