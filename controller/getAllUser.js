const mongoose = require("mongoose");
const getAllUser = async (req, res) => {
  const User = mongoose.model("user");
  try {
    const response = await User.find().sort({ _id: -1 });
    res.status(200).json({
      status: "sucess",
      data: response,
    });
  } catch (error) {
    res.status(400),
      json({
        status: "Failed",
        message: error.message,
      });
  }
};
module.exports = getAllUser;
