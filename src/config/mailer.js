const nodemailer = require("nodemailer");

const { random, round } = Math;
exports.genPin = () => {
  return `${round(random() * 9999) + 1000}`;
};

exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});
