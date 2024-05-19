const mongoose = require("mongoose");
const getUserEmail = async (req, res) => {
  const getEmail = req.params.email;
  const User = mongoose.model("user");
  const getUser = await User.findOne({
    email: getEmail,
  });
  res.status(200).json({
    status: "sucessfull",
    data: getUser,
  });
};

module.exports = getUserEmail;
