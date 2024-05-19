const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const aunthorizationHeadder = req.headers.authorization;
  console.log(aunthorizationHeadder);
  if (!aunthorizationHeadder) {
    res.status(401).json({
      status: " Authorization failed",
      messege: "please login first!",
    });
    return;
  }

  const token = aunthorizationHeadder.split("Bearer ")[1];
  try {
    const checkToken = await jwt.verify(token, process.env.jwt_key);
    req.user = checkToken;
    if (!checkToken) throw "Authorization failed";
  } catch (error) {
    res.status(401).json({
      status: " Authorization failed",
      Message: error,
    });
    return;
  }
  // // sucess then...
  next();
};

module.exports = auth;
