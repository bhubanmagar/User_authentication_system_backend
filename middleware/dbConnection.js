const mongoose = require("mongoose");
const dbConnect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Database connection sucessfull");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;
