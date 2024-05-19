const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "User name is required"],
      default: "user",
    },
    email: {
      type: String,
      require: [true, "Email can't be empty"],
    },
    password: {
      type: String,
      require: [true, "Password can't be empty"],
    },
    isverified: {
      type: Boolean,
      default: false,
    },

    verificationOTP: {
      type: String,
      require: false,
    },
    forgetPasswordOTP: {
      type: String,
      require: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
