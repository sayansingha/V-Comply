// index.js
const cron = require("node-cron");
const express = require("express");
let nodemailer = require("nodemailer");

app = express();

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "domain.sayan.singha@gmail.com",
    pass: "fido@home"
  }
});

// sending emails at periodic intervals
cron.schedule("* * * * *", function(){
  console.log("---------------------");
  console.log("Running Cron Job");
  let mailOptions = {
    from: "domain.sayan.singha@gmail.com",
    to: "sayansingha1451997@gmail.com",
    subject: `Reminder of one minute`,
    text: `Hi there, this email was automatically sent by us`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});

app.listen("3128");
