const express = require("express");
const cors = require("cors");
const Route = require("./Routes/Routes");
const dotenv = require("dotenv");
const dbConnect = require("./middleware/dbConnection");
const app = express();
app.use(
  cors({
    origin:
      "https://intern-frontend-kh3x-qfl9qedxu-bhuban-magars-projects.vercel.app",
  })
);
app.use(express.json()); //middleware to handle json data
require("dotenv").config(); //middleware to handle env file
app.use(express.urlencoded({ extended: true })); //form data handeling middleware
dbConnect(process.env.MONGO_URI); //database connection
require("./Models/userModel");

app.use("/api/auth", Route);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
