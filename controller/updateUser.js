const mongoose = require("mongoose");

const updateUser = async (req, res) => {
  const getID = req.params.id;
  const { email, name, password } = req.body;
  const User = mongoose.model("user");

  try {
    await User.findByIdAndUpdate(
      {
        _id: getID,
      },
      {
        email: email,
        name: name,
        password: password,
      }
    );
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }

  res.status(200).json({
    status: "sucess",
    message: "updated sucessfully",
  });
};
module.exports = updateUser;
