const mongoose = require("mongoose");
const deleteUser = async (req, res) => {
  const getID = req.params.id;
  const User = mongoose.model("user");
  try {
    await User.findByIdAndDelete({ _id: getID });
  } catch (error) {
    return res.status(400).json({
      satatus: "Failed",
      message: error.message,
    });
  }
  res.status(200).json({
    sattus: "sucess",
    message: "deleted sucessfully",
  });
};

module.exports = deleteUser;
