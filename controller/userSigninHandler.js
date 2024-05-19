const { mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSigninHandler = async (req, res) => {
  const { email, password } = req.body;
  const User = mongoose.model("user");
  try {
    if (!email && !password) {
      return res.status(400).json({
        status: "Failed",
        message: "Email or Password can't be empty",
      });
    }
    const response = await User.findOne({ email: email }); //checking if email match or not
    if (!response) throw "Email doesn't found";
    if (response.isverified !== true) throw "Unauthorized to Login";
    const match = await bcrypt.compare(password, response.password); //comparing password
    if (!match) throw "password doesn't match";
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: error,
    });
  }

  let getuserToken = await User.findOne({
    email: email,
  });

  //making acess token
  const accessToken = jwt.sign(
    {
      _id: getuserToken._id,
      name: getuserToken.name,
      email: getuserToken.email,
    },
    process.env.jwt_key,
    {
      expiresIn: "90 days",
    }
  );

  //sucess
  res.status(200).json({
    status: "sucessfull",
    messege: "user logged in sucessfully",
    data: accessToken,
  });
};

module.exports = userSigninHandler;
