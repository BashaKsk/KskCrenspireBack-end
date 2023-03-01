const bcrypt = require("bcryptjs");

class UserSecurity {
  static hashPwd(plainPassword) {
    const saltRounds = 12;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(plainPassword, salt);
    return hashedPassword;
  }
  static async comparePwd(inputPassword, dbPassword) {
    return  bcrypt.compare(inputPassword, dbPassword);
  }
}

module.exports = UserSecurity;