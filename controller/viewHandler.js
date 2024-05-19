const mongoose = require("mongoose");
const viewHandler = async (req, res) => {
  const getID = req.params.id;
  const User = mongoose.model("user");
  const getUser = await User.findById({
    _id: getID,
  });
  res.status(200).json({
    status: "sucessfull",
    data: getUser,
  });
};

module.exports = viewHandler;
