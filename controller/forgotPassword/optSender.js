const mongoose = require("mongoose");
const sendEmailer = require("../../utils/sendEmails");
const otpSender = async (req, res) => {
  const User = mongoose.model("user");
  const getEmail = req.body.email;

  try {
    const otp = Math.floor(1000 + Math.random() * 9000); //otp generator code
    //setting forgotpasswordOYP in user model
    await User.findOneAndUpdate(
      { email: getEmail },
      {
        forgetPasswordOTP: otp,
      }
    );
    const response = await User.findOne({
      email: getEmail,
    });
    const getOtp = response.forgetPasswordOTP;
    sendEmailer(getEmail, "OTP", getOtp); //sending otp
    return res.status(200).json({
      message: "opt send sucessfully",
      opt: getOtp,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed to send otp",
      error: error.message,
    });
  }
};

module.exports = otpSender;
