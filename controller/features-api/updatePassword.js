const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const updatePassword = async (req, res) => {
  const getEmail = req.params.email;
  const { password } = req.body;
  const User = mongoose.model("user");
  try {
    const encPassword = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate(
      {
        email: getEmail,
      },
      { password: encPassword }
    );
  } catch (error) {
    return res.status(400).json({
      status: "failed to update password",
      error: error.messgage,
    });
  }
  res.status(200).json({
    status: "sucessfully updated",
  });
};

module.exports = updatePassword;
