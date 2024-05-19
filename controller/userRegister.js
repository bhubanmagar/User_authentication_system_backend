const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const sendmailer = require("../utils/sendEmails");
const userRegister = async (req, res) => {
  const User = mongoose.model("user");
  const { name, email, password } = req.body;
  if (!email && !password) {
    return res.status(400).json({
      status: "failed",
      message: "Email or Password can't be empty",
    });
  }
  const encPassword = await bcrypt.hash(password, 10);
  const otp = Math.floor(1000 + Math.random() * 9000); //otp generator code

  try {
    await User.create({
      name: name,
      email: email,
      password: encPassword,
      verificationOTP: otp,
    });
    const url = `${process.env.BASE_URL}users/${otp}/verify/${email}`;
    sendmailer(email, "email verificaiton", url); //sending mail
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }

  res.status(200).json({
    status: "sucess",
    message: "user Registered Sucessfully",
  });
};

module.exports = userRegister;
