const nodemailer = require("nodemailer");

const sendMailer = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("Email send sucessfully");
  } catch (error) {
    console.log("Email failed to send");
    console.log(error.message);
  }
};

module.exports = sendMailer;
