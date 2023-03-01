const JWT = require("../security/jwtToken");
const responseObject = require("../utils/resObject");

exports.authJwtToken = async (req, res, next) => {
  const authToken = req.header("Authorization");
  if (authToken) {
    const isVerified = await JWT.verifyJwtToken(authToken);
    if (isVerified) {
      next();
    } else {
      res
        .status(400)
        .json(
          responseObject(400, " User Not authorized", null, "Invalid Token")
        );
    }
  } else {
    res
      .status(400)
      .json(
        responseObject(
          400,
          "Please provide authorizationToken",
          null,
          "Token Error"
        )
      );
  }
};
