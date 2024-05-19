const express = require("express");
const userRegister = require("../controller/userRegister");
const userSigninHandler = require("../controller/userSigninHandler");
const viewHandler = require("../controller/viewHandler");
const deleteUser = require("../controller/deleteUser");
const updateUser = require("../controller/updateUser");
const getAllUser = require("../controller/getAllUser");
const auth = require("../middleware/auth");
const verifyUser = require("../controller/verification/verifyUser");
const otpSender = require("../controller/forgotPassword/optSender");
const getUserEmail = require("../controller/features-api/getUserEmail");
const updatePassword = require("../controller/features-api/updatePassword");

const Route = express.Router();

Route.get("/", (req, res) => {
  res.send("this is main page");
});
Route.get("/profile/:id", viewHandler);
Route.get("/get-profile/:email", getUserEmail);
Route.get("/profile", getAllUser);

Route.put("/update-Password/:email", updatePassword);

Route.post("/signup", userRegister);
Route.post("/forgot", otpSender);
Route.post("/verify", verifyUser);
Route.post("/signin", userSigninHandler);

//protected route
Route.use(auth); //authentication
Route.delete("/profile/:id", deleteUser);
Route.put("/profile/:id", updateUser);
module.exports = Route;
