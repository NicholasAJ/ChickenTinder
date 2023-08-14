const jwt = require("jsonwebtoken");
const SECRET_KEY = "adkwodkwolsfj";
const secret = SECRET_KEY;
// module.exports.secret = SECRET_KEY;
module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.userToken, secret, (err, payload) => {
    if (err) {
      res.status(401).json({verified: false});
    } else {
      next();
    }
  });
}