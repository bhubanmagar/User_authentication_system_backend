const mongose = require("mongoose");
const verifyUser = async (req, res) => {
  const { email } = req.body;
  const User = mongose.model("user");

  try {
    const response = await User.findOne({ email: email });
    if (!response) throw "User doesn't exist";
    await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        isverified: true,
      }
    );
    res.status(200).json({
      status: "sucess",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

module.exports = verifyUser;
