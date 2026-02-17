const jwt = require("jsonwebtoken");
async function identifyUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      messege: "unauthorised access",
    });
  }
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    return res.status(401).json({
      messege: "Invalid token",
    });
  }
  req.user = decoded;
  next();
}
module.exports = identifyUser;
